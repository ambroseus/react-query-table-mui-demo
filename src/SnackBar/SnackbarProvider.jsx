import * as React from 'react'
import { SnackbarProvider as NotistackProvider } from 'notistack'
import { Button } from '@material-ui/core'

export function SnackbarProvider(props) {
  const {
    children,
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'right',
    },
    autoHideDuration = 5000,
    style = {
      marginRight: 16,
    },
  } = props

  const notistackRef = React.createRef()

  const handleDismiss = (key) => () => {
    notistackRef?.current?.closeSnackbar(key)
  }

  return (
    <NotistackProvider
      ref={notistackRef}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      style={style}
      action={(key) => (
        <Button style={{ color: 'white' }} onClick={handleDismiss(key)}>
          Dismiss
        </Button>
      )}
    >
      {children}
    </NotistackProvider>
  )
}
