import Route from '@ember/routing/route';
import { hash } from 'rsvp'

export default Route.extend({
    
    model() {
        const taskList = this.get('store').findAll('task')

        const doneTasksList = this.store.findAll('task')
            .then(results => results.filter( (task) => {
                return task.get('done') === true 
            }))
        return hash({ 
            all: taskList,
            done: doneTasksList 
        })
    },
    actions: {
        deleteTask(id) {
            this.get('store').findRecord('task', id, { backgroundReload: false }).then(function (task) {
                task.destroyRecord()
            })
        },
        updateTask(id, title, done) {
            this.get('store').findRecord('task', id, { backgroundReload: false }).then(function(responseRecord) {
                responseRecord.set('title', title)
                responseRecord.set('done', done)
                responseRecord.save()
            })
        }
    }

});
