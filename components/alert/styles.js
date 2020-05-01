export default function getStyle(type) {
  switch (type) {
    case 'info':
      return {
        backgroundColor: '#e8d99e',
      }
    case 'error':
      return {
        backgroundColor: '#ff3333',
      }
    default:
      return {}
  }
}
