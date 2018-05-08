import AreaList from '../components/Area';


const mapStateToProps = state => {
    return {
        areaList: state.areaList
    }
}

export default Area = connect(
    mapStateToProps,
    '',
)(AreaList)