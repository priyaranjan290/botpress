/**
 * Description of the action goes here
 * @param  {String} params.name=value Description of the parameter goes here
 * @param  {Number} [params.age] Optional parameter
 */
async function yourCustomAction(state, event, args) {
    console.log(state)
    console.log("printed state")
    console.log(event)
    console.log("printed event")
    console.log(args)
    console.log("printed params")

    const c = {...state}
    console.log(c)
    return c;
}

async function saveTheName(state, event, args) {
    console.log("inside save the name.....")
    console.log(args)
    var name = args['name']
    console.log(name)

    const knex = await event.bp.db.get();

    //insert
    knex('test_user').insert({name : name, age : 12}).then(
        function () {
            console.log("inserted into the database")

            //print
            var query = knex.select().table('test_user')
            query.then(function (results) {
                for( var i = 0; i < results.length; i++ )
                {
                    console.log("result is" + results[i]['name']+'\n');
                }
            })
        })

}




module.exports = { yourCustomAction, saveTheName }
