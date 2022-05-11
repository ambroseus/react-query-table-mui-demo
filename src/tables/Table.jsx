import { useTable } from 'react-table'

import {
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'

import { Empty } from './Empty'
import { LoadingText } from './LoadingText'
import { TableMessage } from './TableMessage'
import { useStyles } from './styles'

const DefaultContainer = (props) => <>{props.children}</>

export function Table(props) {
  const cls = useStyles()
  const {
    columns,
    data = [],
    isLoading = false,
    isFetching = false,
    rowsPerPage,
    Container = DefaultContainer,
    containerStyle = {},
    containerProps,
    headerCellStyle = {},
    cellStyle = {},
  } = props
  const table = useTable({ columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table

  let emptyRowsCount = 0

  if (rowsPerPage) {
    emptyRowsCount = rowsPerPage - rows.length
  }

  return (
    <Container {...containerProps} style={{ ...containerStyle }}>
      <div className={cls.loadingOverlayWrap}>
        <div className={isFetching ? cls.loadingOverlay : ''} />
        <MuiTable {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <TableCell
                      {...column.getHeaderProps()}
                      width={column.width}
                      className={cls.headerCell}
                      style={{ ...headerCellStyle }}
                    >
                      {column.render('Header')}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <TableRow {...row.getRowProps()} className={cls.tableRow}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        padding="none"
                        style={{ ...cellStyle }}
                      >
                        {cell.render('Cell')}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </MuiTable>
      </div>
      {isLoading && (
        <TableMessage>
          <LoadingText>Loading...</LoadingText>
        </TableMessage>
      )}
      {!isLoading && data.length === 0 && (
        <TableMessage>
          <Empty />
        </TableMessage>
      )}
      {emptyRowsCount > 0 && (
        <div className="empty-rows" style={{ height: 44 * emptyRowsCount }} />
      )}
    </Container>
  )
}
