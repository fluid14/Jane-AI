import DB from '../airtable.service';

const getActions = async () => {
  const actions = await DB('Resources')
    .select({
      filterByFormula: 'IF({category}="actions", "Continue", "")',
      fields: [
        'record_id',
        'userDescription',
        'description',
        'title',
        'icon',
        'url',
        'shortcut',
        'tags',
      ],
    })
    .all();

  return actions.map((data) => data.fields);
};

export default getActions;
