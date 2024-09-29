import {DomEvent, Handler} from "leaflet";

/**
 * Custom leaflet handler plugin to enable panning the map only by using the mouse's
 * middle button (scroll button).
 */
export default Handler.extend({
    addHooks: function() {
        DomEvent.on(this._map.getContainer(), 'mousedown', this._customMouseDown, this);
        DomEvent.on(this._map.getContainer(), 'mouseup', this._customMouseUp, this);
        DomEvent.on(this._map.getContainer(), 'mouseleave', this._mouseLeave, this);
    },
    removeHooks: function() {
        DomEvent.off(this._map.getContainer(), 'mousedown', this._customMouseDown, this);
        DomEvent.off(this._map.getContainer(), 'mouseup', this._customMouseUp, this);
        DomEvent.off(this._map.getContainer(), 'mouseleave', this._mouseLeave, this);
    },
    _middleClickButtonCode:  1,
    _customMouseDown: function(evt: MouseEvent) {
        if (evt.button != this._middleClickButtonCode) {
            this._map.dragging.disable();
            return;
        }
    },
    _customMouseUp: function(evt: MouseEvent) {
        if (evt.button != this._middleClickButtonCode) {
            this._map.dragging.enable();
        }
    },
    _mouseLeave: function(evt: MouseEvent) {
        this._map.dragging.enable();
    }
});