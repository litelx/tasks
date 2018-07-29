import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    done: DS.attr('boolean'),
    // actions: {
    //     delete(id) {
    //         this.get('store').findRecord('task', id, { backgroundReload: false }).then(function(task) {
    //             task.deleteRecord();
    //             task.get('isDeleted'); // => true
    //             task.save(); // => DELETE to /tasks/1
    //         });
    //     }
    // }
});
