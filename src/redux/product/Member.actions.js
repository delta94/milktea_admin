import { firestore } from 'src/firebase';
export const MEMBER_REQUEST = 'MEMBER_REQUEST';
export const MEMBER_REQUEST_FAIL = 'MEMBER_REQUEST_FAIL';
export const MEMBER_GET_SUCCESS = 'MEMBER_GET_SUCCESS';

export const memberGet = () => {
  return async (dispatch) => {
    dispatch({
      type: MEMBER_REQUEST,
    });
    let members = [];
    try {
      firestore
        .collection('products')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let member = doc.data();
            member['id'] = doc.id;
            members.push(member);
          });
        });
      console.log(members);
      dispatch({
        type: MEMBER_GET_SUCCESS,
        members,
      });
    } catch (err) {
      dispatch({
        type: MEMBER_REQUEST_FAIL,
      });
      throw err;
    }
  };
};

// export const logout = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: USER_REQUEST,
//     });
//     try {
//       dispatch({
//         type: LOGOUT_SUCCESS,
//       });
//     } catch (err) {
//       dispatch({
//         type: USER_REQUEST_FAIL,
//       });
//       throw err;
//     }
//   };
// };
