import React from "react";
import { Typography } from "@mui/material";

const ActiveStudent = () => {
  return (
    <div class="container-fluid">
      <Typography variant="h4" align="center" gutterBottom>
        Active Students 
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
                  <th>Fee</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Sex</th>
                  <th>Class</th>
                  <th>Parent</th>
                  <th>Fee</th>
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
                  <td>68</td>
                  <td>Herrod Chandler</td>
                  <td>male</td>
                  <td>JSS1</td>
                  <td>Dai Rios</td>
                  <td>paid</td>
                </tr>
                <tr>
                  <td>69</td>
                  <td>Rhona Davidson</td>
                  <td>female</td>
                  <td>JSS2</td>
                  <td>Bradley Greer</td>
                  <td>outstanding</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>Colleen Hurst</td>
                  <td>male</td>
                  <td>JSS2</td>
                  <td>Gloria Little</td>
                  <td>paid</td>
                </tr>
                <tr>
                  <td>71</td>
                  <td>Sonya Frost</td>
                  <td>female</td>
                  <td>JSS1</td>
                  <td>Paul Byrd</td>
                  <td>outstanding</td>
                </tr>
                <tr>
                  <td>72</td>
                  <td>Jena Gaines</td>
                  <td>female</td>
                  <td>JSS3</td>
                  <td>Michael Silva</td>
                  <td>paid</td>
                </tr>
                <tr>
                  <td>73</td>
                  <td>Quinn Flynn</td>
                  <td>male</td>
                  <td>SS1</td>
                  <td>Tatyana Fitzpatrick</td>
                  <td>outstanding</td>
                </tr>
                <tr>
                  <td>74</td>
                  <td>Charde Marshall</td>
                  <td>male</td>
                  <td>SS2</td>
                  <td>Haley Kennedy</td>
                  <td>paid</td>
                </tr>
                <tr>
                  <td>75</td>
                  <td>Haley Kennedy</td>
                  <td>female</td>
                  <td>SS3</td>
                  <td>Ashton Cox</td>
                  <td>outstanding</td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012/03/29</td>
                  <td>$433,060</td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
                </tr>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>2012/12/02</td>
                  <td>$372,000</td>
                </tr>
                <tr>
                  <td>Herrod Chandler</td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>59</td>
                  <td>2012/08/06</td>
                  <td>$137,500</td>
                </tr>
                <tr>
                  <td>Rhona Davidson</td>
                  <td>Integration Specialist</td>
                  <td>Tokyo</td>
                  <td>55</td>
                  <td>2010/10/14</td>
                  <td>$327,900</td>
                </tr>
                <tr>
                  <td>Colleen Hurst</td>
                  <td>Javascript Developer</td>
                  <td>San Francisco</td>
                  <td>39</td>
                  <td>2009/09/15</td>
                  <td>$205,500</td>
                </tr>
                <tr>
                  <td>Sonya Frost</td>
                  <td>Software Engineer</td>
                  <td>Edinburgh</td>
                  <td>23</td>
                  <td>2008/12/13</td>
                  <td>$103,600</td>
                </tr>
                <tr>
                  <td>Jena Gaines</td>
                  <td>Office Manager</td>
                  <td>London</td>
                  <td>30</td>
                  <td>2008/12/19</td>
                  <td>$90,560</td>
                </tr>
                <tr>
                  <td>Quinn Flynn</td>
                  <td>Support Lead</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2013/03/03</td>
                  <td>$342,000</td>
                </tr>
                <tr>
                  <td>Charde Marshall</td>
                  <td>Regional Director</td>
                  <td>San Francisco</td>
                  <td>36</td>
                  <td>2008/10/16</td>
                  <td>$470,600</td>
                </tr>
                <tr>
                  <td>Haley Kennedy</td>
                  <td>Senior Marketing Designer</td>
                  <td>London</td>
                  <td>43</td>
                  <td>2012/12/18</td>
                  <td>$313,500</td>
                </tr>
                <tr>
                  <td>Tatyana Fitzpatrick</td>
                  <td>Regional Director</td>
                  <td>London</td>
                  <td>19</td>
                  <td>2010/03/17</td>
                  <td>$385,750</td>
                </tr>
                <tr>
                  <td>Michael Silva</td>
                  <td>Marketing Designer</td>
                  <td>London</td>
                  <td>66</td>
                  <td>2012/11/27</td>
                  <td>$198,500</td>
                </tr>
                <tr>
                  <td>Paul Byrd</td>
                  <td>Chief Financial Officer (CFO)</td>
                  <td>New York</td>
                  <td>64</td>
                  <td>2010/06/09</td>
                  <td>$725,000</td>
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
  );
};

export default ActiveStudent;
