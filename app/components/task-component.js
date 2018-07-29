import Component from '@ember/component';

export default Component.extend({
    notEditing: true,
    originTitle: '',

    didRender() {
        this.set('className', this.done ? 'task-done' : '')
    },
    actions: {
        isTaskDone(id, done) {
            this.set('className', !done ? 'task-done' : '')
            const title = this.get('title')
            this.sendAction('updateTask',id, title, !done)
        },
        updateTaskTitle() {
            this.set('originTitle', this.get('title'))
            this.set('notEditing', false)
        },
        sendUpdate(id, title, done) {
            this.set('notEditing', true)
            this.sendAction('updateTask',id, title, done)
        },
        deleteTask(id) {
            this.sendAction('deleteTask',id)
        },
        cancelAddTask() {
            this.set('notEditing', true)

        }
    }
});
