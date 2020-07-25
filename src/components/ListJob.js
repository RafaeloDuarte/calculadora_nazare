import React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

function ListJob(props) {
    return (
        <View style={styles.container}>
            <Text>Lista</Text>
            {/*<FlatList
                data={[
                    { nome: 'Jenny', idade: 28 },
                    { nome: 'Lenny', idade: 58 },
                    { nome: 'Caio', idade: 5 },
                    { nome: 'Otavio', idade: 15 },
                    { nome: 'Rubens', idade: 90 },
                    { nome: 'Nunel', idade: 58 },
                    { nome: 'Jacira', idade: 18 },
                    { nome: 'Lucimara', idade: 28 },
                ]}
                renderItem={({ item }) =>
                    <Text style={styles.item}>{item.nome}</Text>
                }
            />*/}

            <SectionList
                sections={[
                    {
                        title: 'A', data: [
                            { nome: 'Romeu', formacao: 'advogado', nivel: 15 },
                            { nome: 'Jumy Carlos', formacao: 'Plotador', nivel: 15 },
                            { nome: 'Adão', formacao: 'Tacografo', nivel: 15 },
                            { nome: 'Paulo', formacao: 'Geologo', nivel: 15 },
                            { nome: 'Denis', formacao: 'Soldador', nivel: 15 },
                        ]
                    },
                    {
                        title: 'B', data: [
                            { nome: 'Paulo', formacao: 'Geologo', nivel: 15 },
                            { nome: 'Denis', formacao: 'Soldador', nivel: 15 },
                        ]
                    }
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.nome}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            />
        </View>
    );
}

export default ListJob;