import React, {Component} from 'react'
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from "../../player/containers/video-player";
import {connect} from 'react-redux'

class Home extends Component {
    state = {
        modalVisibble: false,
    };

    handleOpenModal = (media) => {
        this.setState({
            modalVisibble: true,
            media
        })
    };

    handleCloseModal = (event) => {
        this.setState({
            modalVisibble: false
        })
    };

    render() {

        return (
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <Categories categories={this.props.categories} handleOpenModal={this.handleOpenModal}/>
                    {
                        this.state.modalVisibble &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer src={this.state.media.src} title={this.state.media.title} autoplay/>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}
function mapStateToProps(state, props) {
    return {
        categories: state.data.categories
    }
}
export default connect(mapStateToProps)(Home);