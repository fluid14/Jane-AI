import deleteActions from '../../../services/action/delete';
import getActions from '../../../services/action/get';

export default async (req, res) => {
  const { method, body, query } = await req;

  switch (req.method) {
    case 'GET': {
      const actions = await getActions();
      res.status(200).json(actions);
      break;
    }
    // case 'POST': {
    //     try {
    //         const marker = await createMarker(req.body);
    //         res.status(200).json({ status: 'created', marker });
    //     } catch (err) {
    //         res.status(422).json({ status: 'not_created', err });
    //     }
    //     break;
    // }
    // case 'PUT': {
    //     try {
    //         const marker = await updateMarker(req.body);
    //         res.status(200).json({ status: 'updated', marker });
    //     } catch (err) {
    //         res.status(422).json({ status: 'not_updated', err });
    //     }
    //     break;
    // }
    case 'DELETE': {
      const { record } = query;
      const deletedRecord = await deleteActions(record);
      res.status(200).json({ status: 'deleted', deletedRecord });
      break;
    }
    default:
      res.status(400);
  }
};
