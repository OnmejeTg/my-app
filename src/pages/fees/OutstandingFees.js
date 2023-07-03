import React from "react";
import { Typography } from "@mui/material";

const OutstandingFees = () => {
  return (
    <div class="container-fluid">
    <Typography variant="h4" align="center" gutterBottom>
      Outstanding Fees
    </Typography>
   
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Sex</th>
                <th>Class</th>
                <th>Parent</th>
                <th>Pay Fee</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Sex</th>
                <th>Class</th>
                <th>Parent</th>
                <th>Pay Fee</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>61</td>
                <td>Tiger Nixon</td>
                <td>male</td>
                <td>JSS1</td>
                <td>Tiger Nixon</td>
                <td>paid</td>
              </tr>
              <tr>
                <td>63</td>
                <td>Garrett Winters</td>
                <td>male</td>
                <td>JSS2</td>
                <td>Garrett Winters</td>
                <td>paid</td>
              </tr>
              <tr>
                <td>66</td>
                <td>Ashton Cox</td>
                <td>female</td>
                <td>JSS3</td>
                <td>Ashton Cox</td>
                <td>outstanding</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Cedric Kelly</td>
                <td>male</td>
                <td>SS1</td>
                <td>Ashton Cox</td>
                <td>outstanding</td>
              </tr>
              <tr>
                <td>66</td>
                <td>Airi Satou</td>
                <td>female</td>
                <td>SS3</td>
                <td>Yuri Berry</td>
                <td>paid</td>
              </tr>
              <tr>
                <td>67</td>
                <td>Brielle Williamson</td>
                <td>female</td>
                <td>SS2</td>
                <td>Jenette Caldwell</td>
                <td>paid</td>
              </tr>
              <tr>
                <td>Gloria Little</td>
                <td>Systems Administrator</td>
                <td>New York</td>
                <td>59</td>
                <td>2009/04/10</td>
                <td>$237,500</td>
              </tr>
              <tr>
                <td>Bradley Greer</td>
                <td>Software Engineer</td>
                <td>London</td>
                <td>41</td>
                <td>2012/10/13</td>
                <td>$132,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OutstandingFees
