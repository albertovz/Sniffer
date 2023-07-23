import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const MyPDFDocument = ({ sniffData }) => {
  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      fontSize: 12,
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 40,
    },
    table: {
      display: 'table',
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderRightWidth: 1,
    },
    tableCell: {
      flex: 1,
      margin: 'auto',
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 3,
      paddingBottom: 3,
      borderStyle: 'solid',
      borderColor: '#000',
      borderWidth: 1,
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>Sniff Data</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>mac_src</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>ip_src</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>tam_src</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>fecha</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>hora</Text>
              </View>
            </View>
            {sniffData.map((data) => (
              <View key={data.id} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text>{data.mac_src}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{data.ip_src}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{data.tam_src}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{data.fecha}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{data.hora}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyPDFDocument;
