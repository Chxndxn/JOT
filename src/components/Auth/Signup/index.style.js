export default {
 rootContainer: {
  justifyContent: 'center',
  alignItems: 'center',
 },
 primaryCard: {
  background: 'rgba(12, 10, 9, 1)',
  width: 417,
  maxHeight: 570,
  padding: '1rem',
  borderRadius: '0.5rem',
 },
 secondaryCard: {
  width: 417,
  maxHeight: 570,
  padding: '1rem',
 },

 cardHeading: {
  color: '#FAFAF9',
  fontSize: '1.5rem',
  lineheight: '2rem',
  fontWeight: '600',
  marginBottom: 0,
 },
 subHeading: {
  color: '#A8A29E',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
 },
 gapY: {
  marginY: 2,
 },
 primaryBtn: {
  width: '100%',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  height: '2.5rem',
 },
 secondaryBtn: {
  width: '100%',
  padding: '0.5rem 1rem',
  border: '1px solid #292524',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  fontWeight: '500',
  height: '2.5rem',
  '&:hover': {
   borderColor: '#292524',
   backgroundColor: '#1F1F1F',
   borderRadius: '0.5rem',
  },
 },
};
