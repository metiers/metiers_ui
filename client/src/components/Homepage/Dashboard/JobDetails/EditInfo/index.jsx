import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import EditJob from './EditJob';
import EditCompany from './EditCompany';

class EditInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      job: {
        title: '',
        description: '',
        notes: '',
        source: '',
        status: 'Will Apply',
        ranking: '5',
        deadline: moment(),
        link: '',
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
      company: {
        name: '',
        description: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
      },
    }

    this.jobInputChange = this.jobInputChange.bind(this);
    this.companyInputChange = this.companyInputChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.removeModal = this.removeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  jobInputChange(key, e) {
    const oldJob = this.state['job'];
    const newJob = this.state['job'];
    const value = e.target.value;
    newJob[key] = value;

    this.setState({
      oldJob: newJob,
    });

    console.log(this.state.job);
  }

  companyInputChange(key, e) {
    const oldCompany = this.state['company'];
    const newCompany = this.state['company'];
    const value = e.target.value;
    newCompany[key] = value;

    this.setState({
      oldCompany: newCompany,
    });

    console.log(this.state.company);
  }

  dateChange(date) {
    const job = {...this.state.job};
    job.deadline = date;
    this.setState({
      job,
    });
  }

  removeModal() {
    document.getElementbyClassName('modal-backdrop fade show').remove();
  }

  handleSubmit() {
    // axios.post('/jobInfo', {
    //   jobId: this.props.jobDetailsAdditional.jobId,
    //   jobNotes: this.state.jobNotes
    // })
    
    // axios.put('/jobInfo', {
    //   jobId: this.props.jobDetailsAdditional.jobId,
    //   jobNotes: this.state.jobNotes
    // })
  }

  render() {
    return (
      <div className="container">
        <form>
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
              <div
                role="tab"
                id="headingOne"
                className="mb-0"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h3 className="card-header">Job</h3>
              </div>
              <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                <div className="card-block">
                  <EditJob
                    job={this.state.job}
                    jobInputChange={this.jobInputChange}
                    dateChange={this.dateChange}
                  />
                </div>
              </div>
            </div>
            <div className="card">
              <div
                role="tab"
                id="headingTwo"
                className="mb-0 collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h3 className="card-header">Company</h3>
              </div>
              <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="card-block">
                  <EditCompany
                    company={this.state.company}
                    companyInputChange={this.companyInputChange}
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#editModal"
              onClick={this.handleSubmit}
            >
              Save
            </button>
            <div className="modal fade" id="editModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">SUCCESS!</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    <p>Successfully Updated Job Information!</p>
                  </div>
                  <div className="modal-footer">
                    <Link to="/home/job-detail" href="/home/job-detail"  className="btn btn-primary" onClick={this.removeModal}>
                      Close
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>     
        </form>
      </div>
    );
  }
}

export default EditInfo;