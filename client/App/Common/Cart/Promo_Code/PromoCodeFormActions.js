import axios from 'axios';

export const PROMO_CODE_FORM_ERROR = 'PROMO_CODE_FORM_ERROR';

export const promoCodeFormError = (error) => ({ type: PROMO_CODE_FORM_ERROR, error });


export const APPLYING_PROMO_CODE = 'APPLYING_PROMO_CODE';
export const REMOVING_PROMO_CODE = 'REMOVING_PROMO_CODE';

export const callingPromoCodeAPI = (type) => ({type});


export const PROMO_CODE_ACCEPTED = 'PROMO_CODE_ACCEPTED';
export const PROMO_CODE_REMOVED = 'PROMO_CODE_REMOVED';

export const promoCodeAPISuccess = (type, {data}) => ({ type, data });


export const PROMO_CODE_DECLINED = 'PROMO_CODE_DECLINED';
export const CODE_REMOVAL_ERROR = 'CODE_REMOVAL_ERROR';

export const promoCodeAPIFail = (type, {errors}) => ({ type, errors });


export function applyPromoCode(data) {
	return dispatch => {
		dispatch( callingPromoCodeAPI(APPLYING_PROMO_CODE) );
		return axios.post(`api/promocode/order/${data.id}`, {promo_code: data.promo})
			.then(response => dispatch( promoCodeAPISuccess( PROMO_CODE_ACCEPTED, response.data ) ))
			.catch(error => dispatch( promoCodeAPIFail( PROMO_CODE_DECLINED, error.data ) ));
	};
};

export function removePromoCode(id) {
  return dispatch => {
    dispatch( callingPromoCodeAPI(REMOVING_PROMO_CODE) );
    return axios.delete(`api/promocode/order/${id}`)
      .then(response => dispatch( promoCodeAPISuccess( PROMO_CODE_REMOVED, response.data ) ))
      .catch(error => dispatch( promoCodeAPIFail( CODE_REMOVAL_ERROR, error.data ) ));
  };
};