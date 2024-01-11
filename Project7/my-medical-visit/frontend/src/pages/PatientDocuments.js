import React, { useEffect, useState } from "react";
import { useUser } from './UserContext';
import "../css/Document.css";

const PatientDocument = () => {
    const { user } = useUser();

    const [patientDocuments, setPatientDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3001/patientDocuments/${user.id}`)
            .then((response) => response.json())
            .then((data) => setPatientDocuments(data))
            .catch((error) => console.error("Error fetching patient documents:", error));
    }, [user]);

    const handlePdfClick = (idDocument) => {
        const pdfUrl = `http://localhost:3001/pdf/${idDocument}`;
        //console.log(pdfUrl)
        setSelectedDocument({ idDocument, pdfUrl });
        setPopupVisible(true);
    };

    return (
        <div>
            {patientDocuments.map((document) => (
                <div key={document.id_document} className="document-container">
                    <div className="pdf-logo" onClick={() => handlePdfClick(document.id_document)} />

                    <div className="document-info">
                        <p>{document.document_type}</p>
                        <p>{document.date_column}</p>
                    </div>
                </div>
            ))}

            {popupVisible && (
                <div className="overlay" onClick={() => setPopupVisible(false)}>
                    <div className="doc_popup">
                        <iframe
                            title="Document PDF"
                            src={`${selectedDocument.pdfUrl}`}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PatientDocument;
