/**
 * Navigation Routes & Menu Configuration
 */
import { treatmentsData, dropdownLeftTreatments, dropdownRightTreatments } from './treatmentsData.js';

export const navLinks = [
  { label: 'Home', href: '#home', page: 'home', isDirectLink: true },
  { label: 'About', href: '#about', page: 'about', isDirectLink: true },
  { label: 'Treatments', href: '#treatments', isDropdown: true },
  { label: 'FAQ', href: '#faq', isDirectLink: true },
  { label: 'Contact', href: '#contact', isDirectLink: true },
];

export const treatmentDropdownItems = treatmentsData.map((item) => ({
  name: item.title,
  slug: item.slug,
  href: `#/treatments/${item.slug}`,
  category: item.category,
}));

export { dropdownLeftTreatments, dropdownRightTreatments };

export default {
  navLinks,
  treatmentDropdownItems,
  dropdownLeftTreatments,
  dropdownRightTreatments,
};