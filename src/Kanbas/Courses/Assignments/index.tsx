import { useParams } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { MdMoreVert, MdAssignmentAdd } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as db from "../../Database";

export default function Assignments() {
    const { cid: courseId } = useParams();
    const { assignments } = db;
    const courseAssignments = assignments.filter(a => a.course === courseId);

    return (
        <div id="wd-assignments" className="container mt-4">
            {/* Search bar and buttons */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                    <FaPlus className="me-2" />
                    <input
                        id="wd-search-assignment"
                        placeholder="Search for Assignments"
                        className="form-control"
                        style={{ width: "300px" }}
                    />
                </div>
                <div>
                    <button className="btn btn-secondary me-2" id="wd-add-assignment-group">
                        <FaPlus className="me-1" /> Group
                    </button>
                    <button className="btn btn-primary" id="wd-add-assignment">
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>

            {/* Assignment List Title */}
            <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
                ASSIGNMENTS
                <div className="d-flex align-items-center">
                    <span
                        style={{
                            border: "1px solid #000", // Defines the rectangle's border
                            padding: "2px 8px", // Padding inside the rectangle
                            borderRadius: "25px", // Makes the corners fully rounded
                            display: "inline-block", // Keeps it as a rectangular box
                        }}
                        className="me-2"
                    >
                        40% of Total
                    </span>
                    <FaPlus className="me-2" />
                    <MdMoreVert />
                </div>
            </h3>

            {/* Assignment List */}
            <ul id="wd-assignment-list" className="list-group">
                {courseAssignments.map(assignment => (
                    <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="d-flex align-items-center">
                            <MdAssignmentAdd className="me-3" style={{ fontSize: '24px' }} />
                            <div>
                                <a
                                    className="wd-assignment-link"
                                    href={`#/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    style={{ color: 'blue' }}
                                >
                                    {assignment.title}
                                </a>
                                <div>Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="border-start border-success ps-3 me-2 d-flex align-items-center">
                                100 pts
                            </div>
                            <MdMoreVert />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}