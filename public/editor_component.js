import React, { Component } from 'react'

export class EditorComponent extends Component {
    render() {
        return (
            <div class="kuiSideBarSection">
                <div class="html-vis-options form-group">
                    <div>
                    <label for="htmlVisInput">HTML</label>
                    </div>

                    <textarea
                    id="htmlVisInput"
                    ng-model="vis.params.html"
                    class="form-control"
                    rows="20"
                    data-test-subj="htmlTextarea"
                    ></textarea>
                </div>
            </div>
        )
    }
}

export default EditorComponent;
