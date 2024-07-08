
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const tasksList = document.getElementById('tasks');
    const aiCommentary = document.getElementById('ai-commentary');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskItem.appendChild(taskSpan);

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.addEventListener('click', () => {
                taskSpan.style.textDecoration = 'line-through';
            });
            taskItem.appendChild(completeBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                tasksList.removeChild(taskItem);
            });
            taskItem.appendChild(deleteBtn);

            tasksList.appendChild(taskItem);
            taskInput.value = '';
            makeAIFunComment(taskText);
        }
    }

    async function makeAIFunComment(taskText) {
        try {
            console.log('Making API request...');
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-4o",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: `Make a humorous and slightly mocking comment about the following task: "${taskText}". Be brief and sarcastic.` }
                ]
            }, {
                headers: {
                    'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
                    'Content-Type': 'application/json'
                }
            });

            console.log('API response:', response);
            const aiComment = response.data.choices[0].message.content;
            aiCommentary.textContent = `AI Commentary: ${aiComment}`;
        } catch (error) {
            console.error('Error making API request:', error);
            aiCommentary.textContent = 'AI Commentary: Unable to fetch comment.';
        }
    }
});
