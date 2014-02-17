// ==========================================================================
//                            DG.GuideView
//
//  Author:   William Finzer
//
//  Copyright ©2014 Concord Consortium
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// ==========================================================================

/** @class  DG.GuideView - Not much more than an SC.WebView. Exists as a singleton.

 @extends SC.WebView
 */
DG.GuideView = SC.WebView.extend(
  /** @scope DG.GuideView.prototype */
  (function() {

    return {
      /**
       The model on which this view is based.
       @property { DG.GuideModel }
       */
      guideModel: null,

      realURL: function() {
        return DG.StringUtilities.guaranteePrefix( this.getPath('guideModel.currentURL'), 'http://')
      }.property('guideModel.currentURL'),

      init: function() {
        sc_super();
        DG.assert( !SC.none( this.get( 'guideModel' ) ) );
      },

      currentURLDidChange: function() {
        this.set('value', this.get('realURL'));
      }.observes('guideModel.currentURL')

    };
  }()) );

