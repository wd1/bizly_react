import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import moment from 'moment';
import objectAssign from 'object-assign';
import LocationDropdown from '../Location_Dropdown/index';
import GuestsDropdownContainer from '../Guests_Dropdown/GuestsDropdownContainer';
import BizDatePickerContainer from '../BizDatePicker/BizDatePickerContainer';
import TimeDropdownContainer from '../Time_Dropdown/TimeDropdownContainer';
import RfpModalContainer from '../RFP_Modal/rfpModalContainer';
import ReqModal from '../Request_Modal/index';
import styles from './SearchForm.css';

const SubmitButton = ({search, params, removeAllFilters, currentRoute}) => {
	return (
		<Button
			className={styles.button + ' ' + styles.buttonmodal}
			onClick={(event) => {
				search(event, params);
				if (currentRoute === '/') {
					removeAllFilters();
				}
			}
		}>
			Search
		</Button>
	);
};

const SearchForm = ({isHomepage, isModal, error, rfpToggle, selectLocation, search, date, location, guests, duration, time, reqModal, currentRoute, removeAllFilters}) => {
	const searchParams = {date: moment(date).format('YYYY-MM-DD'), location, guests, time: moment(time, 'hh:mm a').format('HHmm')}
	return (
		<div className={isHomepage == true ? styles.homepage : styles.interiorpage}>
			<ReqModal/>
			<div className='hidden-xs'>
				<form className={isModal == true ? styles.modalform : styles.notmodal}>
					<LocationDropdown styles={styles} selectLocation={selectLocation} isHomepage={isHomepage} location={location}/>
				  <GuestsDropdownContainer className={styles.dropdown} isModal={isModal} isHomepage={isHomepage} />
				  <span className={styles.date} >
				  	<BizDatePickerContainer  isModal={isModal} isHomepage={isHomepage}/>
				  </span>
				  <TimeDropdownContainer isHomepage={isHomepage}/>
					<SubmitButton
						rfpToggle={rfpToggle}
						search={search}
						params={searchParams}
						removeAllFilters={removeAllFilters}
						currentRoute={currentRoute} />
				</form>
			</div>
			<div className='visible-xs-block'>
				<form className={isModal == true ? styles.modalform : styles.notmodal}>
				  <LocationDropdown styles={styles} selectLocation={selectLocation} isHomepage={isHomepage} location={location}/>
				  <GuestsDropdownContainer className={styles.fullBox} isModal={isModal} isHomepage={isHomepage}/>
				  <BizDatePickerContainer className={styles.date} isModal={isModal} isHomepage={isHomepage}/>
				  <TimeDropdownContainer className={styles.styledselect} isHomepage={isHomepage}/>
				  <SubmitButton search={search} className={styles.modalbutton} params={searchParams}/>
				</form>
			</div>
			<RfpModalContainer/>
		</div>
	);
};

export default SearchForm;