
# Pagination for larger data sets in the tables / list

# Import pagination file
import Pagination from './Pagination'

# Usages - add pagination below the table and pass the paginated data to the table or the lists have larger data sets  
    <table> ....
    {paginated data}
    ....
    ...
    </table>
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onChangePage}
      />

# Properties:
currentPage // constant based on requirement,  here it is eg: 5
totalPages  // total no of pages(3) is based on array size of the items(eg: 15) and current page size (5)
onPageChange  // change functionalies on click event 



