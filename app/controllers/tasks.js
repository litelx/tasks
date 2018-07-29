import Controller from '@ember/controller';

export default Controller.extend({
    showAddNewTask: false,
    didRender() {
      
    },

    actions: {
        addNewTaskComponent() {
            this.set('showAddNewTask', true)
            this.set('addNew', false)
            this.set('title', '')
        },
        addNewTask() {
            const title = this.get('title')
            // new task
            let task = this.store.createRecord('task', {
                title: title,
                done: false
            });
    
            function transitionToTask(task) {
                // console.log('transitionTotask = ', task);
            }
                
            function failure(reason) {
                console.log('failure = ', reason);
            }
    
            task.save().then(transitionToTask).catch(failure);
            this.set('showAddNewTask', false)

        },
        cancelAddTask() {
            this.set('showAddNewTask', false)
        }
    },
});
