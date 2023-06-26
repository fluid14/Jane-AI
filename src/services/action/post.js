import DB from '../airtable.service';

const postAction = async (payload) => await DB('Resources').create([payload]);

export default postAction;
