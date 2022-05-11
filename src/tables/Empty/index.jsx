export function Empty(props) {
  return (
    <span
      style={{
        color: '#689',
        fontSize: 13,
        fontStyle: 'italic',
        ...props.style,
      }}
    >
      {'<empty>'}
    </span>
  )
}