import {Pipe} from '@angular/core';

@Pipe({
  name: 'truncateString'
})
export class TruncateString {
  transform(item) {
    var options, text, item, maxTextLength, cutIndex, lastWordSeparatorIndex, newText;
    var suffix = "";
    options = {
      maxLength: 125,
      // By default we add an ellipsis at the end
      suffix: true,
      suffixString: "...",
      // By default we preserve word boundaries
      preserveWordBoundaries: true,
      wordSeparator: " "
    };
    text = item.description;

    if (text.length <= options.maxLength) {
      return text;
    }
    // Compute suffix to use (eventually add an ellipsis)
    if (text.length > options.maxLength && options.suffix) {
      suffix = options.suffixString;
    }

    // Compute the index at which we have to cut the text
    maxTextLength = options.maxLength - suffix.length;

    lastWordSeparatorIndex = text.lastIndexOf(options.wordSeparator, maxTextLength + 1);
    // We include 0 because if have a "very long first word" (size > options.maxLength), we still don't want to cut it
    // But just display "...". But in this case the user should probably use preserveWordBoundaries:false...
    cutIndex = lastWordSeparatorIndex > 0 ? lastWordSeparatorIndex : maxTextLength;

    newText = text.substr(0, cutIndex);
    return newText + suffix;
  }
}
