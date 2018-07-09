function __image( _path, _width, _height, _thumb_width, _thumb_height ) {
	var _thumb_path;
	_thumb_path = _path.replace( /\./, '-thumb.' );
	document.write( '<a href="' + _path + '" onclick="window.open( \'/popup/?path=' + escape( _path ) + '&width=' + _width + '&height=' + _height + '\', \'\', \'width=' + _width + ',height=' + _height + '\' ); return false"><img height="' + _thumb_height + '" src="' + _path.replace( /\./, '-thumb.' ) + '" width="' + _thumb_width + '"></a>' );
	}
function __init() {
	}
function _image( _alt, _id, _portrait ) {
	var _height, _left, _top, _width;
	_height = _portrait ? 600 : 450;
	_width = _portrait ? 450 : 600;
	_left = screen.width ? ( ( screen.width - _width ) / 2 ) : 100;
	_top = screen.height ? ( ( screen.height - _height ) / 2 ) : 100;
	window.open( '/image/?alt=' + _alt + '&id=' + _id + ( _portrait ? '&portrait=1' : '' ), '', 'width=' + _width + ',height=' + _height + ',top=' + _top + ',left=' + _left );
	return false;
	}

function _i( _alt, _id, _portrait ) {
	var _jsalt;
	_jsalt = _alt.replace( /'/g, "\\'" );
	document.write( '<a href="/i/600/' + _id + '.jpg" onclick="return _image( \'' + _jsalt + '\', ' + _id + ( _portrait ? ', 1' : '' ) + ')"><img alt="' + _alt + '" height="' + ( _portrait ? '200' : '150' ) + '" src="/i/200/' + _id + '.jpg" width="' + ( _portrait ? '150' : '200' ) + '"></a>' );
	}
