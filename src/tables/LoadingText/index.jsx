import { useStyles } from './styles'

export function LoadingText(props) {
  const { children, style } = props
  const cls = useStyles()
  return (
    <div className={cls.loading} style={style}>
      {children || 'Loading...'}
    </div>
  )
}
