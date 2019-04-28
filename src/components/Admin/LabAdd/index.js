import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import styles from './LabAdd.module.css';

class LabAdd extends Component {
  state = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    certificate: '',
    catALatest: '',
    catBLatest: '',
    catCLatest: '',
    catDLatest: '',
    catELatest: '',
    notesLatest: '',
  };

  onSubmit = (formProps) => {
    console.log('formProps: ', formProps)
  };

  updateName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  updateAddress1 = (e) => {
    this.setState({
      address1: e.target.value
    });
  }
  updateAddress2 = (e) => {
    this.setState({
      address2: e.target.value
    });
  }
  updateCity = (e) => {
    this.setState({
      city: e.target.value
    });
  }
  updateCertificate = (e) => {
    this.setState({
      certificate: e.target.value
    });
  }

  updateCatALatest = (e) => {
    this.setState({
      catALatest: e.target.value
    });
  }
  updateCatBLatest = (e) => {
    this.setState({
      catBLatest: e.target.value
    });
  }
  updateCatCLatest = (e) => {
    this.setState({
      catCLatest: e.target.value
    });
  }
  updateCatDLatest = (e) => {
    this.setState({
      catDLatest: e.target.value
    });
  }
  updateCatELatest = (e) => {
    this.setState({
      catELatest: e.target.value
    });
  }
  updateNotesLatest = (e) => {
    this.setState({
      notesLatest: e.target.value
    });
  }

  handleNewRow = (e) => {
    e.preventDefault();
    const newRow = {
      a: this.state.catALatest,
      b: this.state.catBLatest,
      c: this.state.catCLatest,
      d: this.state.catDLatest,
      e: this.state.catELatest,
      notes: this.state.notesLatest,
    };

    const reportRows = this.props.reportData;
    reportRows.push(newRow);
    this.props.updateAddLabReportData(reportRows);

    this.setState({
      catALatest: '',
      catBLatest: '',
      catCLatest: '',
      catDLatest: '',
      catELatest: '',
      notesLatest: ''
    })
  };

  renderReportData() {
    let reportRecord = [];
    console.log("renderReportData: ", this.props.reportData)
    this.props.reportData.forEach((row, i) => {
      reportRecord.push(
        <tr key={i}>
          <td>{row.a}</td>
          <td>{row.b}</td>
          <td>{row.c}</td>
          <td>{row.d}</td>
          <td>{row.ee}</td>
          <td>{row.notes}</td>
        </tr>
      );
    });

    reportRecord.push(
      <tr key="latest" style={{backgroundColor: 'white' }}>
        <td style={{ paddingLeft: '0', width: '30%' }}>
          <input
            style={{ width: '100%'}}
            value={this.state.catALatest}
            onChange={this.updateCatALatest}
          />
        </td>
        <td className={styles.ReportDataNumeric}>
          <input
            style={{ width: '100%'}}
            value={this.state.catBLatest}
            onChange={this.updateCatBLatest}
          />
        </td>
        <td className={styles.ReportDataNumeric}>
          <input
            style={{ width: '100%'}}
            value={this.state.catCLatest}
            onChange={this.updateCatCLatest}
          />
        </td>
        <td className={styles.ReportDataNumeric}>
          <input
            style={{ width: '100%'}}
            value={this.state.catDLatest}
            onChange={this.updateCatDLatest}
          />
        </td>
        <td className={styles.ReportDataNumeric}>
          <input
            style={{ width: '100%'}}
            value={this.state.catELatest}
            onChange={this.updateCatELatest}
          />
        </td>
        <td style={{ paddingRight: '0' }}>
          <textarea
            rows="1"
            style={{ width: '100%', border: '1px solid #CCCCCC'}}
            value={this.state.notesLatest}
            onChange={this.updateNotesLatest}
          >
          </textarea>
        </td>
      </tr>
    );

    return (
      reportRecord
    )
  }

  renderLabInfoHeader() {
    return (
      <div className={styles.LabInfoHeader}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <div className={styles.ColumnOne}>
              <h5 className={styles.BottomPush}>Name: <br />
                <span className={styles.LabInfoText}>
                  <Field
                    name="name"
                    type="text"
                    component="input"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.updateName}
                  />
                </span>
              </h5>
              <h5 className={styles.BottomPush}>Address1: <br/>
                <span className={styles.LabInfoText}>
                   <Field
                    name="address1"
                    type="text"
                    component="input"
                    className="form-control"
                    value={this.state.address1}
                    onChange={this.updateAddress1}
                  />
                </span>
              </h5>
              <h5>Address2: <br/>
                <span className={styles.LabInfoText}>
                <Field
                  name="address2"
                  type="text"
                  component="input"
                  className="form-control"
                  value={this.state.address2}
                  onChange={this.updateAddress2}
                />
                </span>
              </h5>
            </div>
          </div>
          <div className={styles.Column}>
            <div className={styles.ColumnTwo}>
              <h5 className={styles.BottomPush}>City: <br/>
                <span className={styles.LabInfoText}>
                <Field
                    name="city"
                    type="text"
                    component="input"
                    className="form-control"
                    value={this.state.city}
                    onChange={this.updateCity}
                  />
                </span>
              </h5>
              <h5>Certificate Number: <br/>
                <span className={styles.LabInfoText}>
                <Field
                  name="certificate"
                  type="text"
                  component="input"
                  className="form-control"
                  value={this.state.certificate}
                  onChange={this.updateCertificate}
                />
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderLabForm() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <hr/>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          { this.renderLabInfoHeader() }
          <hr/>
          <h4 className={styles.ReportDataHeader}>Report Data</h4>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>E</th>
                <th>Notes</th>
              </tr>
              </thead>
              <tbody>
              { this.renderReportData() }
              </tbody>
            </table>
          </div>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button
                  style={{ boxShadow: 'none'}}
                  onClick={this.handleNewRow}
                  className="btn btn-sm btn-outline-secondary">Add Row
                </button>
              </div>
            </div>
            <div style={{ width: '300px', marginTop: '35px' }}>
              <button type="submit" style={{ boxShadow: 'none' }} className="btn btn-block btn-success">Add Lab</button>
            </div>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <AdminSidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

            <AdminHeader
              headerText="Add Lab"
            />

            { this.renderLabForm() }

          </main>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   reportData: state.labReport.data
// });

function mapStateToProps(state) {
  // console.log(state.labReport.data)
  return {
    reportData: state.labReport.data
  }
}

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'addLab' }))(
  LabAdd
);
