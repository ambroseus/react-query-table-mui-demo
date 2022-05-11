import * as React from 'react'
import {
  MUI_PAGE_DEFAULT_VALUE,
  ROWS_PER_PAGE_DEFAULT_VALUE,
  Table,
  TableContainer,
  TablePagination
} from '../../tables'

import { columns } from './columns'

function useGetData() {
  return {
    data: {
      content: [],
      totalElements: 0,
    },
    isLoading: false,
    isFetching: false,
  }
}

export function DataTable() {
  const [page, setPage] = React.useState(MUI_PAGE_DEFAULT_VALUE)
  const [rowsPerPage, setRowsPerPage] = React.useState(ROWS_PER_PAGE_DEFAULT_VALUE)

  const { data, isLoading, isFetching } = useGetData({
    page,
    size: rowsPerPage,
  })

  return (

        <TableContainer>
          <Table
            columns={columns}
            data={data?.content || []}
            isLoading={isLoading}
            isFetching={isFetching}
            rowsPerPage={rowsPerPage}
          />
          <TablePagination
            total={data?.totalElements || 0}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            isLoading={isLoading}
          />
        </TableContainer>
  )
}