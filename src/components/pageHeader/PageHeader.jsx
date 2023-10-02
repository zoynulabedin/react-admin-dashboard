import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
const PageHeader = ({title}) => {
    const { user } = useAuth();
  return (
    <div className="page-header">
    <div className="row">
        <div className="col-sm-12">
            <h3 className="page-title">Welcome {user?.role?.name}!</h3>
            <ul className="breadcrumb">
                <li className="breadcrumb-item active">{title}</li>
            </ul>
        </div>
    </div>
</div>
  )
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageHeader