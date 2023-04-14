namespace MRMS.DAL
{
    public interface IGlobalRepository
    {
        IGenericRepository<TEntity> GetRepository<TEntity>() where TEntity : class;

        ////Country
        //IGenericRepository<Country> CountryRepository { get; }

        ////Company
        //IGenericRepository<Company> CompanyRepository { get; }

        ////Agent
        //IGenericRepository<Agent> AgentRepository { get; }

        ////Traning Center
        //IGenericRepository<TrainingCentre> TrainingCenterRepository { get; }

        ////Agency
        //IGenericRepository<Agency> AgencyRepository { get; }
        //IGenericRepository<AgencySyndicate> AgencySyndicateRepository { get; }

        ////Demand Repositories
        //IGenericRepository<Demand> DemandRepository { get; }
        //IGenericRepository<DemandFile> DemandFileRepository { get; }
        //IGenericRepository<DemandIssue> DemandIssueRepository { get; }

        ////Trade
        //IGenericRepository<Trade> TradeRepository { get; }

        ////Applicant Repositories
        //IGenericRepository<Applicant> ApplicantRepository { get; }
        //IGenericRepository<ApplicantFile> ApplicantFileRepository { get; }
        //IGenericRepository<ApplicantIssue> ApplicantIssueRepository { get; }
        //IGenericRepository<ApplicantIssueComment> ApplicantIssueCommentRepository { get; }

        ////Medical Repositories
        //IGenericRepository<MedicalCenter> MedicalCenterRepository { get; }
        //IGenericRepository<MedicalRecord> MedicalRecordRepository { get; }
        //IGenericRepository<MedicalFile> MedicalFileRepository { get; }
        //IGenericRepository<MedicalIssue> MedicalIssueRepository { get; }

        ////Application Repositories
        //IGenericRepository<Application> ApplicationRepository { get; }
        //IGenericRepository<ApplicationFile> ApplicationFileRepository { get; }
        //IGenericRepository<ApplicationFileTransfer> ApplicationFileTransferRepository { get; }
        //IGenericRepository<ApplicationIssue> ApplicationIssueRepository { get; }

        ////Calling Repositories
        //IGenericRepository<Calling> CallingRepository { get; }
        //IGenericRepository<CallingFile> CallingFileRepository { get; }
        //IGenericRepository<CallingIssue> CallingIssueRepository { get; }

        ////Forwarding
        //IGenericRepository<Forwarding> ForwardingRepository { get; }
        //IGenericRepository<ForwardingFile> ForwardingFileRepository { get; }
        //IGenericRepository<ForwardingIssue> ForwardingIssueRepository { get; }
        //IGenericRepository<ForwardingFileTransfer> ForwardingFileTransferRepository { get; }

        //IGenericRepository<BMET> BMETRepository { get; }
        //IGenericRepository<Training> TrainingRepository { get; }
        //IGenericRepository<FingerPrint> FingerPrintRepository { get; }

        ////Visa

        //IGenericRepository<Visa> VisaRepository { get; }
        //IGenericRepository<VisaFile> VisaFileRepository { get; }
        //IGenericRepository<VisaIssue> VisaIssueRepository { get; }
        //IGenericRepository<VisaFileTransfer> VisaFileTransferRepository { get; }

        ////Flight
        //IGenericRepository<Flight> FlightRepository { get; }
        //IGenericRepository<FlightFile> FlightFileRepository { get; }
        //IGenericRepository<FlightIssue> FlightIssueRepository { get; }

        ////Rejected Applicant
        //IGenericRepository<RejectedApplicant> RejectedApplicantRepository { get; }

        ////Designation
        //IGenericRepository<Designation> DesignationRepository { get; }

        ////Employee Repositories
        //IGenericRepository<Employee> EmployeeRepository { get; }
        //IGenericRepository<EmployeeFile> EmployeeFileRepository { get; }

        ////File Transfer Repository
        //IGenericRepository<FileType> FileTypeRepository { get; }

        //Transaction
        void BeginTransaction();
        void CommitTransaction();
        void RollbackTransaction();

        //Global EF Save Method
        void Save();

    }
}
