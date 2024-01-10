// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the HomeAboutUs component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addRouteType({
    name: 'Event',
    displayName: 'Event',
    fields: [
      { name: 'title', displayName: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'author', displayName: 'Author', type: CommonFieldTypes.SingleLineText },
      { name: 'content', displayName: 'Content', type: CommonFieldTypes.RichText },
      {
        name: 'startDate',
        displayName: 'Start Data',
        type: CommonFieldTypes.DateTime,
        standardValue: '$now',
      },
      {
        name: 'endDate',
        displayName: 'End Data',
        type: CommonFieldTypes.DateTime,
        standardValue: '$now',
      },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });

  manifest.addComponent({
    name: 'EventComponent',
    templateName: 'EventComponent',
    icon: SitecoreIcon.DocumentTag,
  });
}
