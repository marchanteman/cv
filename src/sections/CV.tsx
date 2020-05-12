import {connect} from "react-redux";
import {IStore} from "../store";
import {actionTypes} from "../store/actionTypes";
import React, {CSSProperties} from "react";
import {config} from "../config";
import {IDims} from "../types";

import PersonalData from "../components/PersonalData";
import SelfImage from "../components/SelfImage";
import Technologies from "../components/Technologies";
import Job from "../components/Job";
import Education from "../components/Education";

interface IProps {
    style?: CSSProperties
    dims: IDims
}

interface IState {

}

class Element extends React.Component<IProps, IState> {
    render() {
        const {style, dims: {width: w, height: h}} = this.props
        const {basicInfo, technology, languages, education, job, jobs} = config
        return (
            <div style={{...style}}>
                <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", flexDirection: "column", width: 0.7*w}}>
                    <div style={{display: "flex", alignSelf: "center", alignItems: "stretch", justifyContent: "space-between", flexDirection: "column", width: '100%', minHeight: h}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", flex: 1}}>
                            <PersonalData transition={{duration: 1.2, delay: 0.1}} style={{borderRadius: 0.03*h, marginTop: 0.05*h, marginBottom: 0.05*h, width: 0.15*w}} basicInfo={basicInfo}/>
                            <SelfImage transition={{duration: 0.6, delay: 0.7}} style={{alignSelf: "flex-end", marginBottom: 0.05*h}} size={h*0.3} />
                            <Education transition={{duration: 1.2, delay: 0.1}} style={{borderRadius: 0.03*h, marginTop: 0.05*h, marginBottom: 0.05*h, width: 0.15*w}} languages={languages} education={education}/>
                        </div>
                        <Technologies transition={{duration: 1.2, delay: 0}} style={{alignSelf: "center", backgroundColor: "#eee", borderRadius: 0.05*h, marginBottom: 0.05*h}} job={job} technology={technology}/>
                    </div>

                    <span style={{color: '#eee', fontSize: 0.07*h, fontWeight: "bold", alignSelf: "center"}}>Professional experience</span>

                    {jobs.map((job, i) => (
                        <Job style={{margin: 0.04*h, width: '80%'}} job={job} side={i % 2 === 0 ? 'left': 'right'}/>
                    ))}
                </div>
            </div>
        )
    }
}

const s2p = (state: IStore) => ({
    dims: state.dims
});

const d2p = (dispatch: (action: actionTypes) => void) => ({});

export default connect(s2p, d2p)(Element);
