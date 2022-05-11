import { TablePagination as MuiTablePagination } from '@material-ui/core'

const ROWS_PER_PAGE = [5, 10]

export const MUI_PAGE_DEFAULT_VALUE = 0
export const ROWS_PER_PAGE_DEFAULT_VALUE = 5

export const toRowsPerPage = (value) => ROWS_PER_PAGE.includes(value) ? value : ROWS_PER_PAGE_DEFAULT_VALUE 

export function TablePagination(props) {
  const { total, page, setPage, rowsPerPage, setRowsPerPage, isLoading } = props

  const handleChangePage = (event, newPage) => setPage(newPage)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(toRowsPerPage(event.target.value))
    setPage(0)
  }

  return (
    <>
      {!isLoading && (
        <MuiTablePagination
          style={{
            marginTop: '10px',
          }}
          rowsPerPageOptions={ROWS_PER_PAGE}
          component="div"
          count={total}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </>
  )
}
