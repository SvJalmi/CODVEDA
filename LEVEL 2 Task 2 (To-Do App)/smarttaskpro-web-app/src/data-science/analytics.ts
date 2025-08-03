export const analyzeTaskData = (taskData) => {
    const totalTasks = taskData.length;
    const completedTasks = taskData.filter(task => task.completed).length;
    const completionRate = (completedTasks / totalTasks) * 100;

    const userProductivity = taskData.reduce((acc, task) => {
        const timeSpent = task.timeSpent || 0;
        return acc + timeSpent;
    }, 0);

    return {
        totalTasks,
        completedTasks,
        completionRate,
        userProductivity
    };
};

export const getTaskCompletionTrends = (taskData) => {
    const trends = {};

    taskData.forEach(task => {
        const date = new Date(task.date).toDateString();
        if (!trends[date]) {
            trends[date] = { completed: 0, total: 0 };
        }
        trends[date].total += 1;
        if (task.completed) {
            trends[date].completed += 1;
        }
    });

    return trends;
};