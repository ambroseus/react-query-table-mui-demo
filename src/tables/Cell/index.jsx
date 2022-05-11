export function Cell(props) {
  console.log(`Cell > props`, props)
  return <div style={{ display: 'flex', padding: '8px 16px' }}>{props.value}</div>
}
