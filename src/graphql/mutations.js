/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteBoardCascade = /* GraphQL */ `
  mutation DeleteBoardCascade($boardID: ID!) {
    deleteBoardCascade(boardID: $boardID)
  }
`;
export const deleteEventCascade = /* GraphQL */ `
  mutation DeleteEventCascade($eventID: ID!) {
    deleteEventCascade(eventID: $eventID)
  }
`;
export const resendPeaboBoardInvite = /* GraphQL */ `
  mutation ResendPeaboBoardInvite($input: ResendPeadboBoardInviteInput!) {
    resendPeaboBoardInvite(input: $input)
  }
`;
export const createPeadboEventWithResources = /* GraphQL */ `
  mutation CreatePeadboEventWithResources(
    $input: CreatePeadboEventWithResourcesInput!
  ) {
    createPeadboEventWithResources(input: $input) {
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      guests {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      errors
      warnings
      __typename
    }
  }
`;
export const createPeadboBoardWithResources = /* GraphQL */ `
  mutation CreatePeadboBoardWithResources(
    $input: CreatePeadboBoardWithResourcesInput!
  ) {
    createPeadboBoardWithResources(input: $input) {
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      members {
        id
        boardID
        author
        boardOwner {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        userEmail
        userName
        text
        htmlString
        resendCount
        lastResendAt
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      errors
      warnings
      __typename
    }
  }
`;
export const updatePeadboBoardActivity = /* GraphQL */ `
  mutation UpdatePeadboBoardActivity(
    $input: UpdatePeadboBoardActivityInput!
    $condition: ModelPeadboBoardActivityConditionInput
  ) {
    updatePeadboBoardActivity(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      description
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboBoardActivity = /* GraphQL */ `
  mutation DeletePeadboBoardActivity(
    $input: DeletePeadboBoardActivityInput!
    $condition: ModelPeadboBoardActivityConditionInput
  ) {
    deletePeadboBoardActivity(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      description
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      author
      authorName
      title
      shortDescription
      content
      status
      image
      imageS3Key
      externalImageUrl
      tags
      protected
      externalUrl
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
      author
      authorName
      title
      shortDescription
      content
      status
      image
      imageS3Key
      externalImageUrl
      tags
      protected
      externalUrl
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
      author
      authorName
      title
      shortDescription
      content
      status
      image
      imageS3Key
      externalImageUrl
      tags
      protected
      externalUrl
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      users
      author
      messages {
        items {
          id
          conversationId
          author
          body
          read
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hiddenBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      users
      author
      messages {
        items {
          id
          conversationId
          author
          body
          read
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hiddenBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      users
      author
      messages {
        items {
          id
          conversationId
          author
          body
          read
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      hiddenBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      conversationId
      author
      body
      read
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboUserEmailList = /* GraphQL */ `
  mutation CreatePeadboUserEmailList(
    $input: CreatePeadboUserEmailListInput!
    $condition: ModelPeadboUserEmailListConditionInput
  ) {
    createPeadboUserEmailList(input: $input, condition: $condition) {
      id
      name
      description
      users {
        email
        name
        peadboUserID
        __typename
      }
      peadboUserID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboUserEmailList = /* GraphQL */ `
  mutation UpdatePeadboUserEmailList(
    $input: UpdatePeadboUserEmailListInput!
    $condition: ModelPeadboUserEmailListConditionInput
  ) {
    updatePeadboUserEmailList(input: $input, condition: $condition) {
      id
      name
      description
      users {
        email
        name
        peadboUserID
        __typename
      }
      peadboUserID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboUserEmailList = /* GraphQL */ `
  mutation DeletePeadboUserEmailList(
    $input: DeletePeadboUserEmailListInput!
    $condition: ModelPeadboUserEmailListConditionInput
  ) {
    deletePeadboUserEmailList(input: $input, condition: $condition) {
      id
      name
      description
      users {
        email
        name
        peadboUserID
        __typename
      }
      peadboUserID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboEventReview = /* GraphQL */ `
  mutation CreatePeadboEventReview(
    $input: CreatePeadboEventReviewInput!
    $condition: ModelPeadboEventReviewConditionInput
  ) {
    createPeadboEventReview(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      foundUseful
      occurred
      comments
      eventID
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboEventReview = /* GraphQL */ `
  mutation UpdatePeadboEventReview(
    $input: UpdatePeadboEventReviewInput!
    $condition: ModelPeadboEventReviewConditionInput
  ) {
    updatePeadboEventReview(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      foundUseful
      occurred
      comments
      eventID
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboEventReview = /* GraphQL */ `
  mutation DeletePeadboEventReview(
    $input: DeletePeadboEventReviewInput!
    $condition: ModelPeadboEventReviewConditionInput
  ) {
    deletePeadboEventReview(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      foundUseful
      occurred
      comments
      eventID
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboNewsletterDelivery = /* GraphQL */ `
  mutation UpdatePeadboNewsletterDelivery(
    $input: UpdatePeadboNewsletterDeliveryInput!
    $condition: ModelPeadboNewsletterDeliveryConditionInput
  ) {
    updatePeadboNewsletterDelivery(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterDeliveredId
      __typename
    }
  }
`;
export const deletePeadboNewsletterDelivery = /* GraphQL */ `
  mutation DeletePeadboNewsletterDelivery(
    $input: DeletePeadboNewsletterDeliveryInput!
    $condition: ModelPeadboNewsletterDeliveryConditionInput
  ) {
    deletePeadboNewsletterDelivery(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterDeliveredId
      __typename
    }
  }
`;
export const updatePeadboNewsletterClick = /* GraphQL */ `
  mutation UpdatePeadboNewsletterClick(
    $input: UpdatePeadboNewsletterClickInput!
    $condition: ModelPeadboNewsletterClickConditionInput
  ) {
    updatePeadboNewsletterClick(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      url
      createdAt
      updatedAt
      peadboNewsletterClickedId
      __typename
    }
  }
`;
export const deletePeadboNewsletterClick = /* GraphQL */ `
  mutation DeletePeadboNewsletterClick(
    $input: DeletePeadboNewsletterClickInput!
    $condition: ModelPeadboNewsletterClickConditionInput
  ) {
    deletePeadboNewsletterClick(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      url
      createdAt
      updatedAt
      peadboNewsletterClickedId
      __typename
    }
  }
`;
export const updatePeadboNewsletterOpen = /* GraphQL */ `
  mutation UpdatePeadboNewsletterOpen(
    $input: UpdatePeadboNewsletterOpenInput!
    $condition: ModelPeadboNewsletterOpenConditionInput
  ) {
    updatePeadboNewsletterOpen(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterOpenedId
      __typename
    }
  }
`;
export const deletePeadboNewsletterOpen = /* GraphQL */ `
  mutation DeletePeadboNewsletterOpen(
    $input: DeletePeadboNewsletterOpenInput!
    $condition: ModelPeadboNewsletterOpenConditionInput
  ) {
    deletePeadboNewsletterOpen(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterOpenedId
      __typename
    }
  }
`;
export const updatePeadboNewsletterBounce = /* GraphQL */ `
  mutation UpdatePeadboNewsletterBounce(
    $input: UpdatePeadboNewsletterBounceInput!
    $condition: ModelPeadboNewsletterBounceConditionInput
  ) {
    updatePeadboNewsletterBounce(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      reason
      createdAt
      updatedAt
      peadboNewsletterBouncesId
      __typename
    }
  }
`;
export const deletePeadboNewsletterBounce = /* GraphQL */ `
  mutation DeletePeadboNewsletterBounce(
    $input: DeletePeadboNewsletterBounceInput!
    $condition: ModelPeadboNewsletterBounceConditionInput
  ) {
    deletePeadboNewsletterBounce(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      reason
      createdAt
      updatedAt
      peadboNewsletterBouncesId
      __typename
    }
  }
`;
export const createPeadboNewsletter = /* GraphQL */ `
  mutation CreatePeadboNewsletter(
    $input: CreatePeadboNewsletterInput!
    $condition: ModelPeadboNewsletterConditionInput
  ) {
    createPeadboNewsletter(input: $input, condition: $condition) {
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      text
      htmlString
      title
      recipients
      scheduled
      scheduledAt
      subject
      delivered {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterDeliveredId
          __typename
        }
        nextToken
        __typename
      }
      opened {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterOpenedId
          __typename
        }
        nextToken
        __typename
      }
      bounces {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          reason
          createdAt
          updatedAt
          peadboNewsletterBouncesId
          __typename
        }
        nextToken
        __typename
      }
      clicked {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          url
          createdAt
          updatedAt
          peadboNewsletterClickedId
          __typename
        }
        nextToken
        __typename
      }
      sgMessageId
      sgBatchId
      status
      version
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboNewsletter = /* GraphQL */ `
  mutation UpdatePeadboNewsletter(
    $input: UpdatePeadboNewsletterInput!
    $condition: ModelPeadboNewsletterConditionInput
  ) {
    updatePeadboNewsletter(input: $input, condition: $condition) {
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      text
      htmlString
      title
      recipients
      scheduled
      scheduledAt
      subject
      delivered {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterDeliveredId
          __typename
        }
        nextToken
        __typename
      }
      opened {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterOpenedId
          __typename
        }
        nextToken
        __typename
      }
      bounces {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          reason
          createdAt
          updatedAt
          peadboNewsletterBouncesId
          __typename
        }
        nextToken
        __typename
      }
      clicked {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          url
          createdAt
          updatedAt
          peadboNewsletterClickedId
          __typename
        }
        nextToken
        __typename
      }
      sgMessageId
      sgBatchId
      status
      version
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboNewsletter = /* GraphQL */ `
  mutation DeletePeadboNewsletter(
    $input: DeletePeadboNewsletterInput!
    $condition: ModelPeadboNewsletterConditionInput
  ) {
    deletePeadboNewsletter(input: $input, condition: $condition) {
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      text
      htmlString
      title
      recipients
      scheduled
      scheduledAt
      subject
      delivered {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterDeliveredId
          __typename
        }
        nextToken
        __typename
      }
      opened {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          createdAt
          updatedAt
          peadboNewsletterOpenedId
          __typename
        }
        nextToken
        __typename
      }
      bounces {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          reason
          createdAt
          updatedAt
          peadboNewsletterBouncesId
          __typename
        }
        nextToken
        __typename
      }
      clicked {
        items {
          author
          sgMessageId
          sgEventId
          email
          timestamp
          url
          createdAt
          updatedAt
          peadboNewsletterClickedId
          __typename
        }
        nextToken
        __typename
      }
      sgMessageId
      sgBatchId
      status
      version
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboNotification = /* GraphQL */ `
  mutation DeletePeadboNotification(
    $input: DeletePeadboNotificationInput!
    $condition: ModelPeadboNotificationConditionInput
  ) {
    deletePeadboNotification(input: $input, condition: $condition) {
      author
      acknowledged
      title
      message
      resource
      resourceID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboOrganization = /* GraphQL */ `
  mutation CreatePeadboOrganization(
    $input: CreatePeadboOrganizationInput!
    $condition: ModelPeadboOrganizationConditionInput
  ) {
    createPeadboOrganization(input: $input, condition: $condition) {
      id
      author
      organizationCode
      name
      description
      logo
      coupons
      path
      licenses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboOrganization = /* GraphQL */ `
  mutation DeletePeadboOrganization(
    $input: DeletePeadboOrganizationInput!
    $condition: ModelPeadboOrganizationConditionInput
  ) {
    deletePeadboOrganization(input: $input, condition: $condition) {
      id
      author
      organizationCode
      name
      description
      logo
      coupons
      path
      licenses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboBoardPostReadReceipt = /* GraphQL */ `
  mutation CreatePeadboBoardPostReadReceipt(
    $input: CreatePeadboBoardPostReadReceiptInput!
    $condition: ModelPeadboBoardPostReadReceiptConditionInput
  ) {
    createPeadboBoardPostReadReceipt(input: $input, condition: $condition) {
      id
      author
      postID
      post {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboBoardPostReadReceipt = /* GraphQL */ `
  mutation UpdatePeadboBoardPostReadReceipt(
    $input: UpdatePeadboBoardPostReadReceiptInput!
    $condition: ModelPeadboBoardPostReadReceiptConditionInput
  ) {
    updatePeadboBoardPostReadReceipt(input: $input, condition: $condition) {
      id
      author
      postID
      post {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboBoardPostReadReceipt = /* GraphQL */ `
  mutation DeletePeadboBoardPostReadReceipt(
    $input: DeletePeadboBoardPostReadReceiptInput!
    $condition: ModelPeadboBoardPostReadReceiptConditionInput
  ) {
    deletePeadboBoardPostReadReceipt(input: $input, condition: $condition) {
      id
      author
      postID
      post {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        content
        likes
        dislikes
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        readBy {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboTask = /* GraphQL */ `
  mutation CreatePeadboTask(
    $input: CreatePeadboTaskInput!
    $condition: ModelPeadboTaskConditionInput
  ) {
    createPeadboTask(input: $input, condition: $condition) {
      id
      dueDateTime
      title
      description
      author
      assigner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      assignee {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      priority
      status
      comments {
        items {
          id
          author
          body
          createdAt
          updatedAt
          peadboTaskCommentsId
          __typename
        }
        nextToken
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      ics
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboTaskAssignerId
      peadboTaskAssigneeId
      __typename
    }
  }
`;
export const updatePeadboTask = /* GraphQL */ `
  mutation UpdatePeadboTask(
    $input: UpdatePeadboTaskInput!
    $condition: ModelPeadboTaskConditionInput
  ) {
    updatePeadboTask(input: $input, condition: $condition) {
      id
      dueDateTime
      title
      description
      author
      assigner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      assignee {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      priority
      status
      comments {
        items {
          id
          author
          body
          createdAt
          updatedAt
          peadboTaskCommentsId
          __typename
        }
        nextToken
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      ics
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboTaskAssignerId
      peadboTaskAssigneeId
      __typename
    }
  }
`;
export const deletePeadboTask = /* GraphQL */ `
  mutation DeletePeadboTask(
    $input: DeletePeadboTaskInput!
    $condition: ModelPeadboTaskConditionInput
  ) {
    deletePeadboTask(input: $input, condition: $condition) {
      id
      dueDateTime
      title
      description
      author
      assigner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      assignee {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      priority
      status
      comments {
        items {
          id
          author
          body
          createdAt
          updatedAt
          peadboTaskCommentsId
          __typename
        }
        nextToken
        __typename
      }
      attachments {
        key
        name
        type
        url
        __typename
      }
      ics
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboTaskAssignerId
      peadboTaskAssigneeId
      __typename
    }
  }
`;
export const createTaskComment = /* GraphQL */ `
  mutation CreateTaskComment(
    $input: CreateTaskCommentInput!
    $condition: ModelTaskCommentConditionInput
  ) {
    createTaskComment(input: $input, condition: $condition) {
      id
      author
      body
      createdAt
      updatedAt
      peadboTaskCommentsId
      __typename
    }
  }
`;
export const updateTaskComment = /* GraphQL */ `
  mutation UpdateTaskComment(
    $input: UpdateTaskCommentInput!
    $condition: ModelTaskCommentConditionInput
  ) {
    updateTaskComment(input: $input, condition: $condition) {
      id
      author
      body
      createdAt
      updatedAt
      peadboTaskCommentsId
      __typename
    }
  }
`;
export const deleteTaskComment = /* GraphQL */ `
  mutation DeleteTaskComment(
    $input: DeleteTaskCommentInput!
    $condition: ModelTaskCommentConditionInput
  ) {
    deleteTaskComment(input: $input, condition: $condition) {
      id
      author
      body
      createdAt
      updatedAt
      peadboTaskCommentsId
      __typename
    }
  }
`;
export const deletePeadboUserInviteTemplate = /* GraphQL */ `
  mutation DeletePeadboUserInviteTemplate(
    $input: DeletePeadboUserInviteTemplateInput!
    $condition: ModelPeadboUserInviteTemplateConditionInput
  ) {
    deletePeadboUserInviteTemplate(input: $input, condition: $condition) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboUserContentTemplate = /* GraphQL */ `
  mutation DeletePeadboUserContentTemplate(
    $input: DeletePeadboUserContentTemplateInput!
    $condition: ModelPeadboUserContentTemplateConditionInput
  ) {
    deletePeadboUserContentTemplate(input: $input, condition: $condition) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboUser = /* GraphQL */ `
  mutation DeletePeadboUser(
    $input: DeletePeadboUserInput!
    $condition: ModelPeadboUserConditionInput
  ) {
    deletePeadboUser(input: $input, condition: $condition) {
      id
      birthdate
      timezone
      industry
      jobTitle
      jobType
      seniority
      jobTitleLevel
      company
      bio
      education
      gender
      image
      firstName
      lastName
      name
      email
      isOnline
      boardPreferences {
        meetingFrequency
        meetingDays
        contactPreferences
        contactCircumstance
        publicAknowledgement
        __typename
      }
      linkedIn
      stripeId
      firstLogin
      organizationCode
      organizationAdmin
      recommendBoardMembers
      recommendAsBoardMember
      billing {
        active
        status
        createdAt
        endedAt
        canceledAt
        cancelAt
        cancelAtPeriodEnd
        currentPeriodStart
        currentPeriodEnd
        daysUntilDue
        subscriptionId
        type
        interval
        cardIssuer
        cardLast4
        cardExpMonth
        cardExpYear
        customerId
        coupon
        __typename
      }
      joinedViaInvite
      ageRange
      isAdmin
      receivedPostSignupMessage
      newsletters {
        items {
          author
          text
          htmlString
          title
          recipients
          scheduled
          scheduledAt
          subject
          sgMessageId
          sgBatchId
          status
          version
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      boards {
        items {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      completedSmartMatchMenteesSurvey
      address {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      phoneCode
      phone
      affiliationCodes
      inviteTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contentTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      notifications {
        email
        inApp
        __typename
      }
      onboardingResponseId
      boardMemberResponseId
      volunteerResponseId
      selfReflectionResponseId
      organizerChecklist {
        createAccount
        completeOnboardingForm
        updateProfileInformation
        videoWhatIsAPeadbo
        videoExampleBoard
        videoChoosingYourPeadbo
        completeGoalAssessmentForm
        videoUsingThePlatform
        newsletterManagement
        __typename
      }
      volunteerChecklist {
        createAccount
        completeVolunteerRegistrationForm
        updateBoardPreferences
        videoWhatIsAPeadbo
        videoBoardMemberBestPractices
        __typename
      }
      organizerPostBoardChecklist {
        videoManagingYourBoard
        videoPreppingForFirstMeeting
        __typename
      }
      boardMemberOf {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      emailLists {
        items {
          id
          name
          description
          peadboUserID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      meetingPrepTipsSent
      meetingLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboBoardActivity = /* GraphQL */ `
  mutation CreatePeadboBoardActivity(
    $input: CreatePeadboBoardActivityInput!
    $condition: ModelPeadboBoardActivityConditionInput
  ) {
    createPeadboBoardActivity(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      description
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboBoardInvite = /* GraphQL */ `
  mutation CreatePeadboBoardInvite(
    $input: CreatePeadboBoardInviteInput!
    $condition: ModelPeadboBoardInviteConditionInput
  ) {
    createPeadboBoardInvite(input: $input, condition: $condition) {
      id
      boardID
      author
      boardOwner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      text
      htmlString
      resendCount
      lastResendAt
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboBoardInvite = /* GraphQL */ `
  mutation UpdatePeadboBoardInvite(
    $input: UpdatePeadboBoardInviteInput!
    $condition: ModelPeadboBoardInviteConditionInput
  ) {
    updatePeadboBoardInvite(input: $input, condition: $condition) {
      id
      boardID
      author
      boardOwner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      text
      htmlString
      resendCount
      lastResendAt
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboBoardInvite = /* GraphQL */ `
  mutation DeletePeadboBoardInvite(
    $input: DeletePeadboBoardInviteInput!
    $condition: ModelPeadboBoardInviteConditionInput
  ) {
    deletePeadboBoardInvite(input: $input, condition: $condition) {
      id
      boardID
      author
      boardOwner {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      text
      htmlString
      resendCount
      lastResendAt
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboBoardMember = /* GraphQL */ `
  mutation CreatePeadboBoardMember(
    $input: CreatePeadboBoardMemberInput!
    $condition: ModelPeadboBoardMemberConditionInput
  ) {
    createPeadboBoardMember(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboUserBoardMemberOfId
      __typename
    }
  }
`;
export const updatePeadboBoardMember = /* GraphQL */ `
  mutation UpdatePeadboBoardMember(
    $input: UpdatePeadboBoardMemberInput!
    $condition: ModelPeadboBoardMemberConditionInput
  ) {
    updatePeadboBoardMember(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboUserBoardMemberOfId
      __typename
    }
  }
`;
export const deletePeadboBoardMember = /* GraphQL */ `
  mutation DeletePeadboBoardMember(
    $input: DeletePeadboBoardMemberInput!
    $condition: ModelPeadboBoardMemberConditionInput
  ) {
    deletePeadboBoardMember(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      peadboUserBoardMemberOfId
      __typename
    }
  }
`;
export const createPeadboBoardDecline = /* GraphQL */ `
  mutation CreatePeadboBoardDecline(
    $input: CreatePeadboBoardDeclineInput!
    $condition: ModelPeadboBoardDeclineConditionInput
  ) {
    createPeadboBoardDecline(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboBoardDecline = /* GraphQL */ `
  mutation UpdatePeadboBoardDecline(
    $input: UpdatePeadboBoardDeclineInput!
    $condition: ModelPeadboBoardDeclineConditionInput
  ) {
    updatePeadboBoardDecline(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboBoardDecline = /* GraphQL */ `
  mutation DeletePeadboBoardDecline(
    $input: DeletePeadboBoardDeclineInput!
    $condition: ModelPeadboBoardDeclineConditionInput
  ) {
    deletePeadboBoardDecline(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboBoardUnresponsive = /* GraphQL */ `
  mutation CreatePeadboBoardUnresponsive(
    $input: CreatePeadboBoardUnresponsiveInput!
    $condition: ModelPeadboBoardUnresponsiveConditionInput
  ) {
    createPeadboBoardUnresponsive(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboBoardUnresponsive = /* GraphQL */ `
  mutation UpdatePeadboBoardUnresponsive(
    $input: UpdatePeadboBoardUnresponsiveInput!
    $condition: ModelPeadboBoardUnresponsiveConditionInput
  ) {
    updatePeadboBoardUnresponsive(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboBoardUnresponsive = /* GraphQL */ `
  mutation DeletePeadboBoardUnresponsive(
    $input: DeletePeadboBoardUnresponsiveInput!
    $condition: ModelPeadboBoardUnresponsiveConditionInput
  ) {
    deletePeadboBoardUnresponsive(input: $input, condition: $condition) {
      id
      boardID
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      userEmail
      userName
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboBoard = /* GraphQL */ `
  mutation CreatePeadboBoard(
    $input: CreatePeadboBoardInput!
    $condition: ModelPeadboBoardConditionInput
  ) {
    createPeadboBoard(input: $input, condition: $condition) {
      id
      author
      authorData {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      role
      name
      description
      type
      status
      duration
      frequency
      members {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      invites {
        items {
          id
          boardID
          author
          peadboUserID
          userEmail
          userName
          text
          htmlString
          resendCount
          lastResendAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      declines {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      unresponsives {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      activity {
        items {
          id
          author
          description
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tasks {
        items {
          id
          dueDateTime
          title
          description
          author
          priority
          status
          ics
          boardID
          createdAt
          updatedAt
          peadboTaskAssignerId
          peadboTaskAssigneeId
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          author
          content
          readBy
          unreadBy
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboBoard = /* GraphQL */ `
  mutation UpdatePeadboBoard(
    $input: UpdatePeadboBoardInput!
    $condition: ModelPeadboBoardConditionInput
  ) {
    updatePeadboBoard(input: $input, condition: $condition) {
      id
      author
      authorData {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      role
      name
      description
      type
      status
      duration
      frequency
      members {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      invites {
        items {
          id
          boardID
          author
          peadboUserID
          userEmail
          userName
          text
          htmlString
          resendCount
          lastResendAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      declines {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      unresponsives {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      activity {
        items {
          id
          author
          description
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tasks {
        items {
          id
          dueDateTime
          title
          description
          author
          priority
          status
          ics
          boardID
          createdAt
          updatedAt
          peadboTaskAssignerId
          peadboTaskAssigneeId
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          author
          content
          readBy
          unreadBy
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboBoard = /* GraphQL */ `
  mutation DeletePeadboBoard(
    $input: DeletePeadboBoardInput!
    $condition: ModelPeadboBoardConditionInput
  ) {
    deletePeadboBoard(input: $input, condition: $condition) {
      id
      author
      authorData {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      role
      name
      description
      type
      status
      duration
      frequency
      members {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      invites {
        items {
          id
          boardID
          author
          peadboUserID
          userEmail
          userName
          text
          htmlString
          resendCount
          lastResendAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      declines {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      unresponsives {
        items {
          id
          boardID
          peadboUserID
          userEmail
          userName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      activity {
        items {
          id
          author
          description
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      tasks {
        items {
          id
          dueDateTime
          title
          description
          author
          priority
          status
          ics
          boardID
          createdAt
          updatedAt
          peadboTaskAssignerId
          peadboTaskAssigneeId
          __typename
        }
        nextToken
        __typename
      }
      posts {
        items {
          id
          author
          content
          likes
          dislikes
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          author
          content
          readBy
          unreadBy
          boardID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboUserContact = /* GraphQL */ `
  mutation CreatePeadboUserContact(
    $input: CreatePeadboUserContactInput!
    $condition: ModelPeadboUserContactConditionInput
  ) {
    createPeadboUserContact(input: $input, condition: $condition) {
      id
      title
      firstName
      lastName
      name
      email
      description
      peadboUserID
      author
      lists {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboUserContact = /* GraphQL */ `
  mutation UpdatePeadboUserContact(
    $input: UpdatePeadboUserContactInput!
    $condition: ModelPeadboUserContactConditionInput
  ) {
    updatePeadboUserContact(input: $input, condition: $condition) {
      id
      title
      firstName
      lastName
      name
      email
      description
      peadboUserID
      author
      lists {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboUserContact = /* GraphQL */ `
  mutation DeletePeadboUserContact(
    $input: DeletePeadboUserContactInput!
    $condition: ModelPeadboUserContactConditionInput
  ) {
    deletePeadboUserContact(input: $input, condition: $condition) {
      id
      title
      firstName
      lastName
      name
      email
      description
      peadboUserID
      author
      lists {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboUserContactList = /* GraphQL */ `
  mutation CreatePeadboUserContactList(
    $input: CreatePeadboUserContactListInput!
    $condition: ModelPeadboUserContactListConditionInput
  ) {
    createPeadboUserContactList(input: $input, condition: $condition) {
      id
      name
      description
      contacts {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboUserContactList = /* GraphQL */ `
  mutation UpdatePeadboUserContactList(
    $input: UpdatePeadboUserContactListInput!
    $condition: ModelPeadboUserContactListConditionInput
  ) {
    updatePeadboUserContactList(input: $input, condition: $condition) {
      id
      name
      description
      contacts {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboUserContactList = /* GraphQL */ `
  mutation DeletePeadboUserContactList(
    $input: DeletePeadboUserContactListInput!
    $condition: ModelPeadboUserContactListConditionInput
  ) {
    deletePeadboUserContactList(input: $input, condition: $condition) {
      id
      name
      description
      contacts {
        items {
          id
          peadboUserContactID
          peadboUserContactListID
          createdAt
          updatedAt
          author
          __typename
        }
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboEventRating = /* GraphQL */ `
  mutation CreatePeadboEventRating(
    $input: CreatePeadboEventRatingInput!
    $condition: ModelPeadboEventRatingConditionInput
  ) {
    createPeadboEventRating(input: $input, condition: $condition) {
      id
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      guest {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      createdAt
      updatedAt
      peadboEventRatingGuestId
      __typename
    }
  }
`;
export const updatePeadboEventRating = /* GraphQL */ `
  mutation UpdatePeadboEventRating(
    $input: UpdatePeadboEventRatingInput!
    $condition: ModelPeadboEventRatingConditionInput
  ) {
    updatePeadboEventRating(input: $input, condition: $condition) {
      id
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      guest {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      createdAt
      updatedAt
      peadboEventRatingGuestId
      __typename
    }
  }
`;
export const deletePeadboEventRating = /* GraphQL */ `
  mutation DeletePeadboEventRating(
    $input: DeletePeadboEventRatingInput!
    $condition: ModelPeadboEventRatingConditionInput
  ) {
    deletePeadboEventRating(input: $input, condition: $condition) {
      id
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      guest {
        id
        author
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        status
        email
        name
        inviteHtml
        inviteText
        optional
        availability {
          daysOfWeek
          startTime
          endTime
          __typename
        }
        rating {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        createdAt
        updatedAt
        peadboEventGuestRatingId
        __typename
      }
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      rating
      createdAt
      updatedAt
      peadboEventRatingGuestId
      __typename
    }
  }
`;
export const createPeadboEventGuest = /* GraphQL */ `
  mutation CreatePeadboEventGuest(
    $input: CreatePeadboEventGuestInput!
    $condition: ModelPeadboEventGuestConditionInput
  ) {
    createPeadboEventGuest(input: $input, condition: $condition) {
      id
      author
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      status
      email
      name
      inviteHtml
      inviteText
      optional
      availability {
        daysOfWeek
        startTime
        endTime
        __typename
      }
      rating {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      createdAt
      updatedAt
      peadboEventGuestRatingId
      __typename
    }
  }
`;
export const updatePeadboEventGuest = /* GraphQL */ `
  mutation UpdatePeadboEventGuest(
    $input: UpdatePeadboEventGuestInput!
    $condition: ModelPeadboEventGuestConditionInput
  ) {
    updatePeadboEventGuest(input: $input, condition: $condition) {
      id
      author
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      status
      email
      name
      inviteHtml
      inviteText
      optional
      availability {
        daysOfWeek
        startTime
        endTime
        __typename
      }
      rating {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      createdAt
      updatedAt
      peadboEventGuestRatingId
      __typename
    }
  }
`;
export const deletePeadboEventGuest = /* GraphQL */ `
  mutation DeletePeadboEventGuest(
    $input: DeletePeadboEventGuestInput!
    $condition: ModelPeadboEventGuestConditionInput
  ) {
    deletePeadboEventGuest(input: $input, condition: $condition) {
      id
      author
      eventId
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      peadboUserID
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      status
      email
      name
      inviteHtml
      inviteText
      optional
      availability {
        daysOfWeek
        startTime
        endTime
        __typename
      }
      rating {
        id
        eventId
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        guest {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        createdAt
        updatedAt
        peadboEventRatingGuestId
        __typename
      }
      createdAt
      updatedAt
      peadboEventGuestRatingId
      __typename
    }
  }
`;
export const createPeadboEvent = /* GraphQL */ `
  mutation CreatePeadboEvent(
    $input: CreatePeadboEventInput!
    $condition: ModelPeadboEventConditionInput
  ) {
    createPeadboEvent(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      startDateTime
      endDateTime
      alertBeforeInterval
      alertBeforeUnit
      alertDateTime
      recurring
      recurringSchedule
      recurringInterval
      sequence
      allDay
      timezone
      title
      type
      descriptionHtml
      descriptionText
      attachments {
        key
        name
        type
        url
        __typename
      }
      meetingLink
      location {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      guests {
        items {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        nextToken
        __typename
      }
      ics
      occurred
      ratings {
        items {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        nextToken
        __typename
      }
      reviewID
      review {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      delayReview
      createdAt
      updatedAt
      peadboEventNotesId
      __typename
    }
  }
`;
export const updatePeadboEvent = /* GraphQL */ `
  mutation UpdatePeadboEvent(
    $input: UpdatePeadboEventInput!
    $condition: ModelPeadboEventConditionInput
  ) {
    updatePeadboEvent(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      startDateTime
      endDateTime
      alertBeforeInterval
      alertBeforeUnit
      alertDateTime
      recurring
      recurringSchedule
      recurringInterval
      sequence
      allDay
      timezone
      title
      type
      descriptionHtml
      descriptionText
      attachments {
        key
        name
        type
        url
        __typename
      }
      meetingLink
      location {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      guests {
        items {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        nextToken
        __typename
      }
      ics
      occurred
      ratings {
        items {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        nextToken
        __typename
      }
      reviewID
      review {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      delayReview
      createdAt
      updatedAt
      peadboEventNotesId
      __typename
    }
  }
`;
export const deletePeadboEvent = /* GraphQL */ `
  mutation DeletePeadboEvent(
    $input: DeletePeadboEventInput!
    $condition: ModelPeadboEventConditionInput
  ) {
    deletePeadboEvent(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      startDateTime
      endDateTime
      alertBeforeInterval
      alertBeforeUnit
      alertDateTime
      recurring
      recurringSchedule
      recurringInterval
      sequence
      allDay
      timezone
      title
      type
      descriptionHtml
      descriptionText
      attachments {
        key
        name
        type
        url
        __typename
      }
      meetingLink
      location {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      notes {
        id
        title
        author
        notesAsHtml
        notesAsText
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        peadboNotesEventId
        __typename
      }
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      guests {
        items {
          id
          author
          eventId
          peadboUserID
          status
          email
          name
          inviteHtml
          inviteText
          optional
          createdAt
          updatedAt
          peadboEventGuestRatingId
          __typename
        }
        nextToken
        __typename
      }
      ics
      occurred
      ratings {
        items {
          id
          eventId
          author
          rating
          createdAt
          updatedAt
          peadboEventRatingGuestId
          __typename
        }
        nextToken
        __typename
      }
      reviewID
      review {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        rating
        foundUseful
        occurred
        comments
        eventID
        event {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      delayReview
      createdAt
      updatedAt
      peadboEventNotesId
      __typename
    }
  }
`;
export const createPeadboBoardMessage = /* GraphQL */ `
  mutation CreatePeadboBoardMessage(
    $input: CreatePeadboBoardMessageInput!
    $condition: ModelPeadboBoardMessageConditionInput
  ) {
    createPeadboBoardMessage(input: $input, condition: $condition) {
      id
      author
      content
      readBy
      unreadBy
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboBoardMessage = /* GraphQL */ `
  mutation UpdatePeadboBoardMessage(
    $input: UpdatePeadboBoardMessageInput!
    $condition: ModelPeadboBoardMessageConditionInput
  ) {
    updatePeadboBoardMessage(input: $input, condition: $condition) {
      id
      author
      content
      readBy
      unreadBy
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboBoardMessage = /* GraphQL */ `
  mutation DeletePeadboBoardMessage(
    $input: DeletePeadboBoardMessageInput!
    $condition: ModelPeadboBoardMessageConditionInput
  ) {
    deletePeadboBoardMessage(input: $input, condition: $condition) {
      id
      author
      content
      readBy
      unreadBy
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboNewsletterDelivery = /* GraphQL */ `
  mutation CreatePeadboNewsletterDelivery(
    $input: CreatePeadboNewsletterDeliveryInput!
    $condition: ModelPeadboNewsletterDeliveryConditionInput
  ) {
    createPeadboNewsletterDelivery(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterDeliveredId
      __typename
    }
  }
`;
export const createPeadboNewsletterClick = /* GraphQL */ `
  mutation CreatePeadboNewsletterClick(
    $input: CreatePeadboNewsletterClickInput!
    $condition: ModelPeadboNewsletterClickConditionInput
  ) {
    createPeadboNewsletterClick(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      url
      createdAt
      updatedAt
      peadboNewsletterClickedId
      __typename
    }
  }
`;
export const createPeadboNewsletterOpen = /* GraphQL */ `
  mutation CreatePeadboNewsletterOpen(
    $input: CreatePeadboNewsletterOpenInput!
    $condition: ModelPeadboNewsletterOpenConditionInput
  ) {
    createPeadboNewsletterOpen(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      createdAt
      updatedAt
      peadboNewsletterOpenedId
      __typename
    }
  }
`;
export const createPeadboNewsletterBounce = /* GraphQL */ `
  mutation CreatePeadboNewsletterBounce(
    $input: CreatePeadboNewsletterBounceInput!
    $condition: ModelPeadboNewsletterBounceConditionInput
  ) {
    createPeadboNewsletterBounce(input: $input, condition: $condition) {
      author
      sgMessageId
      sgEventId
      email
      timestamp
      reason
      createdAt
      updatedAt
      peadboNewsletterBouncesId
      __typename
    }
  }
`;
export const createPeadboNotes = /* GraphQL */ `
  mutation CreatePeadboNotes(
    $input: CreatePeadboNotesInput!
    $condition: ModelPeadboNotesConditionInput
  ) {
    createPeadboNotes(input: $input, condition: $condition) {
      id
      title
      author
      notesAsHtml
      notesAsText
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      peadboNotesEventId
      __typename
    }
  }
`;
export const updatePeadboNotes = /* GraphQL */ `
  mutation UpdatePeadboNotes(
    $input: UpdatePeadboNotesInput!
    $condition: ModelPeadboNotesConditionInput
  ) {
    updatePeadboNotes(input: $input, condition: $condition) {
      id
      title
      author
      notesAsHtml
      notesAsText
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      peadboNotesEventId
      __typename
    }
  }
`;
export const deletePeadboNotes = /* GraphQL */ `
  mutation DeletePeadboNotes(
    $input: DeletePeadboNotesInput!
    $condition: ModelPeadboNotesConditionInput
  ) {
    deletePeadboNotes(input: $input, condition: $condition) {
      id
      title
      author
      notesAsHtml
      notesAsText
      event {
        id
        author
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        startDateTime
        endDateTime
        alertBeforeInterval
        alertBeforeUnit
        alertDateTime
        recurring
        recurringSchedule
        recurringInterval
        sequence
        allDay
        timezone
        title
        type
        descriptionHtml
        descriptionText
        attachments {
          key
          name
          type
          url
          __typename
        }
        meetingLink
        location {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        notes {
          id
          title
          author
          notesAsHtml
          notesAsText
          createdAt
          updatedAt
          peadboNotesEventId
          __typename
        }
        boardID
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        guests {
          nextToken
          __typename
        }
        ics
        occurred
        ratings {
          nextToken
          __typename
        }
        reviewID
        review {
          id
          author
          rating
          foundUseful
          occurred
          comments
          eventID
          createdAt
          updatedAt
          __typename
        }
        delayReview
        createdAt
        updatedAt
        peadboEventNotesId
        __typename
      }
      createdAt
      updatedAt
      peadboNotesEventId
      __typename
    }
  }
`;
export const createPeadboNotification = /* GraphQL */ `
  mutation CreatePeadboNotification(
    $input: CreatePeadboNotificationInput!
    $condition: ModelPeadboNotificationConditionInput
  ) {
    createPeadboNotification(input: $input, condition: $condition) {
      author
      acknowledged
      title
      message
      resource
      resourceID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboNotification = /* GraphQL */ `
  mutation UpdatePeadboNotification(
    $input: UpdatePeadboNotificationInput!
    $condition: ModelPeadboNotificationConditionInput
  ) {
    updatePeadboNotification(input: $input, condition: $condition) {
      author
      acknowledged
      title
      message
      resource
      resourceID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboOrganization = /* GraphQL */ `
  mutation UpdatePeadboOrganization(
    $input: UpdatePeadboOrganizationInput!
    $condition: ModelPeadboOrganizationConditionInput
  ) {
    updatePeadboOrganization(input: $input, condition: $condition) {
      id
      author
      organizationCode
      name
      description
      logo
      coupons
      path
      licenses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboBoardPost = /* GraphQL */ `
  mutation CreatePeadboBoardPost(
    $input: CreatePeadboBoardPostInput!
    $condition: ModelPeadboBoardPostConditionInput
  ) {
    createPeadboBoardPost(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      content
      likes
      dislikes
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      readBy {
        items {
          id
          author
          postID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboBoardPost = /* GraphQL */ `
  mutation UpdatePeadboBoardPost(
    $input: UpdatePeadboBoardPostInput!
    $condition: ModelPeadboBoardPostConditionInput
  ) {
    updatePeadboBoardPost(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      content
      likes
      dislikes
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      readBy {
        items {
          id
          author
          postID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeadboBoardPost = /* GraphQL */ `
  mutation DeletePeadboBoardPost(
    $input: DeletePeadboBoardPostInput!
    $condition: ModelPeadboBoardPostConditionInput
  ) {
    deletePeadboBoardPost(input: $input, condition: $condition) {
      id
      author
      user {
        id
        birthdate
        timezone
        industry
        jobTitle
        jobType
        seniority
        jobTitleLevel
        company
        bio
        education
        gender
        image
        firstName
        lastName
        name
        email
        isOnline
        boardPreferences {
          meetingFrequency
          meetingDays
          contactPreferences
          contactCircumstance
          publicAknowledgement
          __typename
        }
        linkedIn
        stripeId
        firstLogin
        organizationCode
        organizationAdmin
        recommendBoardMembers
        recommendAsBoardMember
        billing {
          active
          status
          createdAt
          endedAt
          canceledAt
          cancelAt
          cancelAtPeriodEnd
          currentPeriodStart
          currentPeriodEnd
          daysUntilDue
          subscriptionId
          type
          interval
          cardIssuer
          cardLast4
          cardExpMonth
          cardExpYear
          customerId
          coupon
          __typename
        }
        joinedViaInvite
        ageRange
        isAdmin
        receivedPostSignupMessage
        newsletters {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        boards {
          nextToken
          __typename
        }
        completedSmartMatchMenteesSurvey
        address {
          addressNumber
          country
          label
          municipality
          postalCode
          region
          street
          subRegion
          __typename
        }
        phoneCode
        phone
        affiliationCodes
        inviteTemplates {
          nextToken
          __typename
        }
        contentTemplates {
          nextToken
          __typename
        }
        level
        notifications {
          email
          inApp
          __typename
        }
        onboardingResponseId
        boardMemberResponseId
        volunteerResponseId
        selfReflectionResponseId
        organizerChecklist {
          createAccount
          completeOnboardingForm
          updateProfileInformation
          videoWhatIsAPeadbo
          videoExampleBoard
          videoChoosingYourPeadbo
          completeGoalAssessmentForm
          videoUsingThePlatform
          newsletterManagement
          __typename
        }
        volunteerChecklist {
          createAccount
          completeVolunteerRegistrationForm
          updateBoardPreferences
          videoWhatIsAPeadbo
          videoBoardMemberBestPractices
          __typename
        }
        organizerPostBoardChecklist {
          videoManagingYourBoard
          videoPreppingForFirstMeeting
          __typename
        }
        boardMemberOf {
          nextToken
          __typename
        }
        emailLists {
          nextToken
          __typename
        }
        meetingPrepTipsSent
        meetingLink
        createdAt
        updatedAt
        __typename
      }
      content
      likes
      dislikes
      boardID
      board {
        id
        author
        authorData {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        role
        name
        description
        type
        status
        duration
        frequency
        members {
          nextToken
          __typename
        }
        invites {
          nextToken
          __typename
        }
        declines {
          nextToken
          __typename
        }
        unresponsives {
          nextToken
          __typename
        }
        events {
          nextToken
          __typename
        }
        activity {
          nextToken
          __typename
        }
        tasks {
          nextToken
          __typename
        }
        posts {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      readBy {
        items {
          id
          author
          postID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboUserInviteTemplate = /* GraphQL */ `
  mutation CreatePeadboUserInviteTemplate(
    $input: CreatePeadboUserInviteTemplateInput!
    $condition: ModelPeadboUserInviteTemplateConditionInput
  ) {
    createPeadboUserInviteTemplate(input: $input, condition: $condition) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboUserInviteTemplate = /* GraphQL */ `
  mutation UpdatePeadboUserInviteTemplate(
    $input: UpdatePeadboUserInviteTemplateInput!
    $condition: ModelPeadboUserInviteTemplateConditionInput
  ) {
    updatePeadboUserInviteTemplate(input: $input, condition: $condition) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboUserContentTemplate = /* GraphQL */ `
  mutation CreatePeadboUserContentTemplate(
    $input: CreatePeadboUserContentTemplateInput!
    $condition: ModelPeadboUserContentTemplateConditionInput
  ) {
    createPeadboUserContentTemplate(input: $input, condition: $condition) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboUserContentTemplate = /* GraphQL */ `
  mutation UpdatePeadboUserContentTemplate(
    $input: UpdatePeadboUserContentTemplateInput!
    $condition: ModelPeadboUserContentTemplateConditionInput
  ) {
    updatePeadboUserContentTemplate(input: $input, condition: $condition) {
      name
      text
      htmlString
      peadboUserID
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboUser = /* GraphQL */ `
  mutation CreatePeadboUser(
    $input: CreatePeadboUserInput!
    $condition: ModelPeadboUserConditionInput
  ) {
    createPeadboUser(input: $input, condition: $condition) {
      id
      birthdate
      timezone
      industry
      jobTitle
      jobType
      seniority
      jobTitleLevel
      company
      bio
      education
      gender
      image
      firstName
      lastName
      name
      email
      isOnline
      boardPreferences {
        meetingFrequency
        meetingDays
        contactPreferences
        contactCircumstance
        publicAknowledgement
        __typename
      }
      linkedIn
      stripeId
      firstLogin
      organizationCode
      organizationAdmin
      recommendBoardMembers
      recommendAsBoardMember
      billing {
        active
        status
        createdAt
        endedAt
        canceledAt
        cancelAt
        cancelAtPeriodEnd
        currentPeriodStart
        currentPeriodEnd
        daysUntilDue
        subscriptionId
        type
        interval
        cardIssuer
        cardLast4
        cardExpMonth
        cardExpYear
        customerId
        coupon
        __typename
      }
      joinedViaInvite
      ageRange
      isAdmin
      receivedPostSignupMessage
      newsletters {
        items {
          author
          text
          htmlString
          title
          recipients
          scheduled
          scheduledAt
          subject
          sgMessageId
          sgBatchId
          status
          version
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      boards {
        items {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      completedSmartMatchMenteesSurvey
      address {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      phoneCode
      phone
      affiliationCodes
      inviteTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contentTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      notifications {
        email
        inApp
        __typename
      }
      onboardingResponseId
      boardMemberResponseId
      volunteerResponseId
      selfReflectionResponseId
      organizerChecklist {
        createAccount
        completeOnboardingForm
        updateProfileInformation
        videoWhatIsAPeadbo
        videoExampleBoard
        videoChoosingYourPeadbo
        completeGoalAssessmentForm
        videoUsingThePlatform
        newsletterManagement
        __typename
      }
      volunteerChecklist {
        createAccount
        completeVolunteerRegistrationForm
        updateBoardPreferences
        videoWhatIsAPeadbo
        videoBoardMemberBestPractices
        __typename
      }
      organizerPostBoardChecklist {
        videoManagingYourBoard
        videoPreppingForFirstMeeting
        __typename
      }
      boardMemberOf {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      emailLists {
        items {
          id
          name
          description
          peadboUserID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      meetingPrepTipsSent
      meetingLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeadboUser = /* GraphQL */ `
  mutation UpdatePeadboUser(
    $input: UpdatePeadboUserInput!
    $condition: ModelPeadboUserConditionInput
  ) {
    updatePeadboUser(input: $input, condition: $condition) {
      id
      birthdate
      timezone
      industry
      jobTitle
      jobType
      seniority
      jobTitleLevel
      company
      bio
      education
      gender
      image
      firstName
      lastName
      name
      email
      isOnline
      boardPreferences {
        meetingFrequency
        meetingDays
        contactPreferences
        contactCircumstance
        publicAknowledgement
        __typename
      }
      linkedIn
      stripeId
      firstLogin
      organizationCode
      organizationAdmin
      recommendBoardMembers
      recommendAsBoardMember
      billing {
        active
        status
        createdAt
        endedAt
        canceledAt
        cancelAt
        cancelAtPeriodEnd
        currentPeriodStart
        currentPeriodEnd
        daysUntilDue
        subscriptionId
        type
        interval
        cardIssuer
        cardLast4
        cardExpMonth
        cardExpYear
        customerId
        coupon
        __typename
      }
      joinedViaInvite
      ageRange
      isAdmin
      receivedPostSignupMessage
      newsletters {
        items {
          author
          text
          htmlString
          title
          recipients
          scheduled
          scheduledAt
          subject
          sgMessageId
          sgBatchId
          status
          version
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events {
        items {
          id
          author
          startDateTime
          endDateTime
          alertBeforeInterval
          alertBeforeUnit
          alertDateTime
          recurring
          recurringSchedule
          recurringInterval
          sequence
          allDay
          timezone
          title
          type
          descriptionHtml
          descriptionText
          meetingLink
          boardID
          ics
          occurred
          reviewID
          delayReview
          createdAt
          updatedAt
          peadboEventNotesId
          __typename
        }
        nextToken
        __typename
      }
      boards {
        items {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      completedSmartMatchMenteesSurvey
      address {
        addressNumber
        country
        geo {
          lat
          long
          __typename
        }
        label
        municipality
        postalCode
        region
        street
        subRegion
        timezone {
          name
          offset
          __typename
        }
        __typename
      }
      phoneCode
      phone
      affiliationCodes
      inviteTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      contentTemplates {
        items {
          name
          text
          htmlString
          peadboUserID
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      level
      notifications {
        email
        inApp
        __typename
      }
      onboardingResponseId
      boardMemberResponseId
      volunteerResponseId
      selfReflectionResponseId
      organizerChecklist {
        createAccount
        completeOnboardingForm
        updateProfileInformation
        videoWhatIsAPeadbo
        videoExampleBoard
        videoChoosingYourPeadbo
        completeGoalAssessmentForm
        videoUsingThePlatform
        newsletterManagement
        __typename
      }
      volunteerChecklist {
        createAccount
        completeVolunteerRegistrationForm
        updateBoardPreferences
        videoWhatIsAPeadbo
        videoBoardMemberBestPractices
        __typename
      }
      organizerPostBoardChecklist {
        videoManagingYourBoard
        videoPreppingForFirstMeeting
        __typename
      }
      boardMemberOf {
        items {
          id
          boardID
          peadboUserID
          createdAt
          updatedAt
          peadboUserBoardMemberOfId
          __typename
        }
        nextToken
        __typename
      }
      emailLists {
        items {
          id
          name
          description
          peadboUserID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      meetingPrepTipsSent
      meetingLink
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeadboUserContactListAssociation = /* GraphQL */ `
  mutation CreatePeadboUserContactListAssociation(
    $input: CreatePeadboUserContactListAssociationInput!
    $condition: ModelPeadboUserContactListAssociationConditionInput
  ) {
    createPeadboUserContactListAssociation(
      input: $input
      condition: $condition
    ) {
      id
      peadboUserContactID
      peadboUserContactListID
      peadboUserContact {
        id
        title
        firstName
        lastName
        name
        email
        description
        peadboUserID
        author
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      peadboUserContactList {
        id
        name
        description
        contacts {
          nextToken
          __typename
        }
        author
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      author
      __typename
    }
  }
`;
export const updatePeadboUserContactListAssociation = /* GraphQL */ `
  mutation UpdatePeadboUserContactListAssociation(
    $input: UpdatePeadboUserContactListAssociationInput!
    $condition: ModelPeadboUserContactListAssociationConditionInput
  ) {
    updatePeadboUserContactListAssociation(
      input: $input
      condition: $condition
    ) {
      id
      peadboUserContactID
      peadboUserContactListID
      peadboUserContact {
        id
        title
        firstName
        lastName
        name
        email
        description
        peadboUserID
        author
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      peadboUserContactList {
        id
        name
        description
        contacts {
          nextToken
          __typename
        }
        author
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      author
      __typename
    }
  }
`;
export const deletePeadboUserContactListAssociation = /* GraphQL */ `
  mutation DeletePeadboUserContactListAssociation(
    $input: DeletePeadboUserContactListAssociationInput!
    $condition: ModelPeadboUserContactListAssociationConditionInput
  ) {
    deletePeadboUserContactListAssociation(
      input: $input
      condition: $condition
    ) {
      id
      peadboUserContactID
      peadboUserContactListID
      peadboUserContact {
        id
        title
        firstName
        lastName
        name
        email
        description
        peadboUserID
        author
        lists {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      peadboUserContactList {
        id
        name
        description
        contacts {
          nextToken
          __typename
        }
        author
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      author
      __typename
    }
  }
`;
export const sendPeadboEmail = /* GraphQL */ `
  mutation SendPeadboEmail($input: PeadboSendEmailInput!) {
    sendPeadboEmail(input: $input) {
      messageId
      error
      __typename
    }
  }
`;
export const acceptPeadboBoardInvite = /* GraphQL */ `
  mutation AcceptPeadboBoardInvite($inviteID: ID!, $peadboUserID: ID!) {
    acceptPeadboBoardInvite(inviteID: $inviteID, peadboUserID: $peadboUserID) {
      invite {
        id
        boardID
        author
        boardOwner {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        peadboUserID
        user {
          id
          birthdate
          timezone
          industry
          jobTitle
          jobType
          seniority
          jobTitleLevel
          company
          bio
          education
          gender
          image
          firstName
          lastName
          name
          email
          isOnline
          linkedIn
          stripeId
          firstLogin
          organizationCode
          organizationAdmin
          recommendBoardMembers
          recommendAsBoardMember
          joinedViaInvite
          ageRange
          isAdmin
          receivedPostSignupMessage
          completedSmartMatchMenteesSurvey
          phoneCode
          phone
          affiliationCodes
          level
          onboardingResponseId
          boardMemberResponseId
          volunteerResponseId
          selfReflectionResponseId
          meetingPrepTipsSent
          meetingLink
          createdAt
          updatedAt
          __typename
        }
        userEmail
        userName
        text
        htmlString
        resendCount
        lastResendAt
        board {
          id
          author
          role
          name
          description
          type
          status
          duration
          frequency
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      errors
      warnings
      __typename
    }
  }
`;
