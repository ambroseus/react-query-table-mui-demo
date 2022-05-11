import { Cell } from '../../tables'

export const columns = [
  {
    accessor: 'name',
    Header: (
      <span style={{ whiteSpace: 'nowrap' }}>Name</span>
    ),
    Cell,
    width: '25%',
  },
  {
    accessor: 'source',
    Header: <span style={{ whiteSpace: 'nowrap' }}>Source</span>,
    Cell,
    width: '25%',
  },
  {
    accessor: 'requestMethod',
    Header: <span style={{ whiteSpace: 'nowrap' }}>Method</span>,
    Cell,
    width: '25%',
  },
  {
    accessor: 'path',
    Header: (
      <span style={{ whiteSpace: 'nowrap' }}>Path</span>
    ),
    Cell,
    width: '25%',
  },
]
