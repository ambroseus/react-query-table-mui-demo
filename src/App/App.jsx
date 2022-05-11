import { NoSsr, CssBaseline, MuiThemeProvider, Grid } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { DataTable } from './DataTable'

const theme = createMuiTheme({})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
      staleTime: 1000 * 5, // 5 sec
    },
  }
})



export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NoSsr>

          <Grid container style={{ margin: 48 }}>
            <DataTable />
          </Grid>

        </NoSsr>
      </MuiThemeProvider>
      {process.env.REACT_APP_QUERY_DEVTOOLS && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

