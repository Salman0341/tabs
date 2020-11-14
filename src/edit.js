/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';
import './editor.scss';

function Edit( props ) {
	const [tabList, setTabList] = useState([
		{
			id: Math.floor(Math.random() * 1000),
			tabTitle: 'Tab 1',
			tabContentTitle: 'Content 1',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
			isActive: true
		},

		{
			id: Math.floor(Math.random() * 1000),
			tabTitle: 'Tab 2',
			tabContentTitle: 'Content 2',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
			isActive: false
		},

		{
			id: Math.floor(Math.random() * 1000),
			tabTitle: 'Tab 3',
			tabContentTitle: 'Content 3',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
			isActive: false,
			disabled: true
		},

		{
			id: Math.floor(Math.random() * 1000),
			tabTitle: 'Tab 4',
			tabContentTitle: 'Content 4',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
			isActive: false
		}
		
	]);

	const tabsHandler = (id) => {
      const newTabList = tabList.map((tab, idx) => {
         if(tab.id === id) {
            return {
				...tab,
				isActive: true
			}
		 }


		 if(tab.id !== id) {
           return {
			   ...tab,
			   isActive: false
		   }
		 }

	  })
	  setTabList(newTabList);
	  return tabList;  
	}

	return (
		<Fragment>
          <div className="cwp_tabs_wrapper">
			<ul className="cwp_list_wrapper">
				{
				tabList.map((extractContent, key) => {
					const { id, tabTitle, disabled } = extractContent;
					return(
						<Fragment> 
						<li><a className="acfb_tab_title" onClick={() => !disabled && tabsHandler(id) }>{tabTitle}</a></li>
						</Fragment>
					)
				})
				}
			</ul>

             { 
			 tabList.map((Content, idx) => {
				 const {tabContentTitle, description, isActive} = Content;
                return(
                  isActive && <div className="cwp_tab_content_wrapper">
                     <div className="cwp_content">
						<h2>{tabContentTitle}</h2>
						<p>{description}</p>
					 </div>
				  </div>
				)
			 }) 
			}
		  </div>
		</Fragment>
	);
}

export default Edit;
