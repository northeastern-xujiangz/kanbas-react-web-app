export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        <label htmlFor="wd-description">Description</label>
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
          The landing page should include the following:
          - Your full name and section
          - Links to each of the lab assignments
          - Links to the Kanbas application
          - Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea><br />
  
        <table>
          <tbody>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" value={100} />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option value="Percentage">Percentage</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option value="Online">Online</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                Online Entry Options
              </td>
              <td>
                <input type="checkbox" id="wd-text-entry" /> Text Entry<br />
                <input type="checkbox" id="wd-website-url" /> Website URL<br />
                <input type="checkbox" id="wd-media-recordings" /> Media Recordings<br />
                <input type="checkbox" id="wd-student-annotation" /> Student Annotation<br />
                <input type="checkbox" id="wd-file-upload" /> File Uploads<br />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                <label htmlFor="wd-assign-to">Assign To</label>
              </td>
              <td>
                <select id="wd-assign-to">
                  <option value="Everyone">Everyone</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                <label htmlFor="wd-due-date">Due</label>
              </td>
              <td>
                <input type="date" id="wd-due-date" value="2024-05-13" />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input type="date" id="wd-available-from" value="2024-05-06" />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "right", verticalAlign: "top" }}>
                <label htmlFor="wd-available-until">Until</label>
              </td>
              <td>
                <input type="date" id="wd-available-until" value="2024-05-20" />
              </td>
            </tr>
          </tbody>
        </table>
  
        <button id="wd-cancel-button">Cancel</button>
        <button id="wd-save-button">Save</button>
      </div>
    );
  }
  