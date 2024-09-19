import { BookText, FolderClosed, Folders, 
         Share2, Building, ChartColumnIncreasing } from "lucide-react"

const DashboardItems = [
    { 
      id: "repo", 
      label: "Repository", 
      icon: <BookText />, 
      subItems: [] 
    },

    { 
      id: "projects", 
      label: "Projects", 
      icon: <FolderClosed />, 
      subItems: [
        "VH-0001 - Vehicle Usdkbuf",
        "VMR041 - Boat Ramasdfbn",
        "LNR-001 - Lunr Samalisdebf",
        "DF-000952 - Boat Ralisdbfh",
        "001 - PF - Sample Prasdfbasd"
      ]
    },

    { 
      id: "collections", 
      label: "Collections", 
      icon: <Folders />, 
      subItems: [
        "Pikenba",
        "My Saved Search"
      ]
    },

    { 
      id: "collaboration", 
      label: "Collaboration", 
      icon: <Share2 />, 
      subItems: [] 
    },

    { 
      id: "portfolios", 
      label: "Portfolios", 
      icon: <Building />, 
      subItems: [] 
    },

    { 
      id: "reports", 
      label: "Reports", 
      icon: <ChartColumnIncreasing />, 
      subItems: [] 
    }
];

export default DashboardItems;