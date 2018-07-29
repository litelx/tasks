import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://tasks.local',
    namespace: 'api'
});
