import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          value="A1"
          className="form-control"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={6}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
            - Your full name and section
            - Links to each of the lab assignments
            - Link to the Kanbas application
            - Links to all relevant source code repositories
            The Kanbas application should include a link to navigate back to the landing page."
        />
      </div>

      {/* Points, Assignment Group, Display Grade As */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" type="number" className="form-control" defaultValue={100} />
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="mb-2">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
      </div>
      <div className="border rounded p-3 mb-4">
        <select id="wd-submission-type" className="form-select mb-3">
          <option value="Online">Online</option>
        </select>

        <label className="form-label">Online Entry Options</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="wd-text-entry" />
          <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
          <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
          <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
          <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="wd-file-upload" />
          <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
        </div>
      </div>

      {/* Assign Section */}
      <div className="mb-2">
        <label htmlFor="wd-assign-to" className="form-label">Assign</label>
      </div>
      <div className="border rounded p-3 mb-4">
        <div className="mb-3">
          <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
          <select id="wd-assign-to" className="form-select">
            <option value="Everyone">Everyone</option>
          </select>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="wd-due-date" className="form-label">Due</label>
            <input type="datetime-local" id="wd-due-date" className="form-control" value="2024-05-13T23:59" />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="wd-available-from" className="form-label">Available from</label>
            <input type="datetime-local" id="wd-available-from" className="form-control" value="2024-05-06T00:00" />
          </div>
          <div className="col-md-6">
            <label htmlFor="wd-available-until" className="form-label">Until</label>
            <input type="datetime-local" id="wd-available-until" className="form-control" value="2024-05-20T23:59" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <button id="wd-cancel-button" className="btn btn-secondary me-2">Cancel</button>
        <button id="wd-save-button" className="btn btn-success">Save</button>
      </div>
    </div>
  );
}
