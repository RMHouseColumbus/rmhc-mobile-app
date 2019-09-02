import * as React from "react";
import {Linking, Text, TextStyle, View} from "react-native";

export function mergeLinkText(text: string, links: any) {
    if (!links) {
        return createText(text);
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

        let split = unsplit.split(search);
        subSplit = [];
        if (split.length >= 2) {
            subSplit.push(
                createText(split[0])
            );
            subSplit.push(
                createLink(data.text, data.url)
            );
            unsplit = split[1];
        }
        merged.push(merge(subSplit))
    });

    const last = merged[merged.length - 1];
    if (last) {
        subSplit.push(createText(unsplit));
        merged[merged.length - 1] = merge(subSplit);
    }
    return merged;
}

export function merge(merged: any) {
    return (
        <View>
            <Text>
                {merged}
            </Text>
        </View>
    )
}

export function createText(text: string) {
    return (
        <Text>
            {text}
        </Text>
    )
}

export function createLink(text: string, url: string) {
    return (
        <Text style={LINK_STYLE} onPress={() => Linking.openURL(url)}>
            {text}
        </Text>
    )
}

export const LINK_STYLE: TextStyle = {
    color: "#0078d7"
};

