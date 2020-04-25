import * as React from "react";
import {Linking, Text, TextStyle, View} from "react-native";

export function mergeLinkText(text: string, links: any, textStyle? :any) {
    if (!links) {
        return createText(text, textStyle);
    }
    let unsplit = text;
    const searchFor = Object.keys(links).map(l => {
        return {
            search: `[[${l}]]`,
            data: links[l]
        }
    });
    const merged = [];
    let subSplit = [];

    searchFor.forEach(searchForMe => {

        const data = searchForMe.data;
        const search = searchForMe.search;

        // split on the  link we want to replace
        let split = unsplit.split(search);
        subSplit = [];
        const splitLength = split.length;
        // for each split - up until the last index which
        // has the last content to merge
        for(let i = 0; i < splitLength - 1; i++){
            // create the text before link
            subSplit.push(
                createText(split[i], textStyle)
            );
            // add the link
            subSplit.push(
                createLink(data.text, data.url, data.type)
            );
        }
        // this is the content that is merged at the end
        unsplit = split[splitLength - 1];
        merged.push(merge(subSplit))
    });

    const last = merged[merged.length - 1];
    if (last) {
        subSplit.push(createText(unsplit, textStyle));
        merged[merged.length - 1] = merge(subSplit);
    }
    return merged;
}

export function merge(merged: any, textStyle?: any) {
    return (
        <View>
            <Text style={textStyle}>
                {merged}
            </Text>
        </View>
    )
}

export function createText(text: string, style? : any) {
    return (
        <Text style={style}>
            {text}
        </Text>
    )
}

export function createLink(text: string, url: string, type: string) {
    if (type === "ph") {   //if a ph number
        return (
            <Text style={LINK_STYLE} onPress={() => Linking.openURL(`tel:${url}`)}>
                {text}
            </Text>
        )
    }
    else if (type == "mail") {
        return (
            <Text style={LINK_STYLE} onPress={() => Linking.openURL(`mailto:${url}`)}>
                {text}
            </Text>
        )
    }
    else {    //if a web page
        return (
            <Text style={LINK_STYLE} onPress={() => Linking.openURL(url)}>
                {text}
            </Text>
        )
    }

}

export const LINK_STYLE: TextStyle = {
    color: "#0078d7"
};

